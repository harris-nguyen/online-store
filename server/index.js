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

  app.get('/api/cart', (req, res, next) => {
    if (!req.session.cartId) {
      res.status(200).json([]);
    }
  });

  app.post('/api/cart', (req, res, next) => {
    // const { productId } = req.body;
    // const value = [productId];

    // if (!Number(productId)) {
    //   return next(new ClientError(`${productId} must be a positive integer`, 400));
    // }
    // const sql = `
    // SELECT "price"
    // FROM "products"
    // WHERE "productId" = $1
    // `;

  });

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
