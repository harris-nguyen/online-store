import React from 'react';
import AddedtoCartModal from './AddedtoCartModal';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      addModalShow: false,
      qty: 0
    };
    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecreaseItem = this.DecreaseItem.bind(this);

  }

  componentDidMount() {
    const id = this.props.productID.productId;
    fetch(`/api/products/${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          product: data
        });
      })
      .catch(err => console.error(err));
  }

  IncrementItem() {
    const data = this.state.product;
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.addToCart(data);
  }

  DecreaseItem() {
    // const productId = this.state.product;
    // const cart = this.props.cartItems;
    // const cartId = cart.map(e => e.cartItemId);

    if (this.state.qty > 0) {
      this.setState({ qty: this.state.qty - 1 });
    } else {
      this.setState({ qty: 0 });
    }
    // eslint-disable-next-line no-console
    console.log('clicked');
    // this.props.removeFromCart();
  }

  render() {
    // console.log(this.props.cartItems);
    const addModalClose = () => this.setState({ addModalShow: false });
    if (this.state.product) {
      const data = this.state.product;
      return (
        <div>
          <div>
            <div className="row paddingCard cardBorder">
              <div className="col-6 ">
                <img
                  src={data.image}
                  className="card-img-top"
                  alt={data.name}
                />
              </div>
              <div className="col-4">
                <h2>{data.name}</h2>
                <div className="text-muted">
                  ${(data.price / 100).toFixed(2)}
                </div>
                <div className="fontSizeTest">{data.shortDescription}</div>

                <div>
                  <span
                    className=""
                    onClick={() => this.setState({ addModalShow: true })}
                  >
                    <div
                      type="button"
                      className="btn btn-primary"
                      onClick={this.IncrementItem}
                    >
                      Add to cart
                    </div>
                  </span>{' '}
                  <AddedtoCartModal
                    qty={this.state.qty}
                    IncrementItem={this.IncrementItem}
                    show={this.state.addModalShow}
                    onHide={addModalClose}
                    setView={this.props.setView}
                  />
                </div>
              </div>

              <div className="m-3">{data.longDescription}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

// <button onClick={this.DecreaseItem}>-</button>;
