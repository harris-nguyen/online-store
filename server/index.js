require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const sql = `
  SELECT "productId",
          "name",
          "price",
          "image",
          "shortDescription"
  FROM "products"
`;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(400).json({
        error: 'an unexpected error occurred with get'
      });
    });
});

app.get('/api/products/:productId', (req, res, next) => {
  const { productId } = req.params;
  const value = [productId];
  const sql = `
    SELECT *
    FROM "products"
    WHERE "productId" = $1
  `;
  if (!Number(productId)) {
    return res.status(400).json({
      error: 'productId must be a positive intger'
    });
  }
  db.query(sql, value)
    .then(result => {
      const data = result.rows[0];
      if (!data) {
        return res.status(400).json({
          error: 'ID does not exist'
        });
      } else {
        return res.status(200).json(data);
      }
    })
    .catch(err => next(err));
});

app.get('/api/cart', (req, res, next) => {
  if (!('cartId' in req.session)) {
    return res.status(200).json([]);
  }
  const sql = `
    select "c"."cartItemId",
        "c"."price",
        "p"."productId",
        "p"."image",
        "p"."name",
        "p"."shortDescription"
    from "cartItems" as "c"
    join "products" as "p" using ("productId")
    where "c"."cartId" = $1
  `;
  const value = [req.session.cartId];
  db.query(sql, value)
    .then(result => {
      const data = result.rows;
      res.status(201).json(data);
    })
    .catch(err => next(err));
});

app.post('/api/cart', (req, res, next) => {
  const { productId } = req.body;
  const value = [productId];
  if (!Number(productId)) {
    return next(new ClientError(`${productId} must be a positive integer`, 400));
  }
  const sql = `
  SELECT "price"
  FROM "products"
  WHERE "productId" = $1
  `;
  db.query(sql, value)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(`productId ${productId} does not exist`, 400);
      }
      if (req.session.cartId) {
        return {
          cartId: req.session.cartId,
          price: result.rows[0].price
        };
      } else {
        const sql = `
        insert into "carts" ("cartId", "createdAt")
        values (default, default)
        returning "cartId"
        `;
        return db.query(sql).then(cartId => ({
          price: result.rows[0].price,
          cartId: cartId.rows[0].cartId
        }));
      }
    })
    .then(data => {
      req.session.cartId = data.cartId;
      const price = data.price;
      const sql = `
        insert into "cartItems" ("cartId", "productId", "price")
        values ($1, $2, $3)
        returning "cartItemId"
      `;
      const values = [data.cartId, productId, price];
      return db.query(sql, values).then(cartItemId => cartItemId.rows[0]);
    })
    .then(cartItemId => {
      const sql = `
      select "c"."cartItemId",
        "c"."price",
        "p"."productId",
        "p"."image",
        "p"."name",
        "p"."shortDescription"
      from "cartItems" as "c"
      join "products" as "p" using ("productId")
      where "c"."cartItemId" = $1
      `;
      const value = [cartItemId.cartItemId];
      return db.query(sql, value).then(data => {
        res.status(201).json(data.rows[0]);
      });
    })
    .catch(err => next(err));
});

app.post('/api/orders', (req, res, next) => {
  const { cartId } = req.session;
  const { name, creditCard, shippingAddress } = req.body;

  if (!cartId) {
    res.status(400).json({
      error: 'cardId does not exist'
    });
    if (!name || !creditCard || !shippingAddress) {
      res.status(400).json({
        error: 'Name, credit card, and shipping address are needed'
      });
    }
  }
  const values = [cartId, name, creditCard, shippingAddress];
  const sql = `
    INSERT INTO "orders" ("cartId", "name", "creditCard", "shippingAddress")
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
  db.query(sql, values).then(result => {
    const orders = result.rows[0];
    delete req.session.cartId;
    res.status(201).json(orders);
  });
});

app.delete('/api/cart/:cartItemId', (req, res, next) => {
  const cartItemId = req.params.cartItemId;
  if (!cartItemId || !Number(cartItemId)) { throw new ClientError('Cart item id required', 400); } else if (cartItemId <= 0) { throw new ClientError(`Cart item id ${cartItemId} is invalid`, 400); }
  const sql = `
  DELETE FROM "cartItems"
  WHERE "cartItemId" = $1
  `;
  const value = [cartItemId];
  db.query(sql, value)
    .then(data => {
      if (data.rowCount === 0) {
        throw new ClientError(`Cart item id ${cartItemId} is invalid`, 400);
      }
      res.sendStatus(204);
    })
    .catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
