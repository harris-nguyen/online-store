import React from 'react';
import AddedtoCartModal from './AddedtoCartModal';
import SocialMediaAlert from './SocialMediaAlert';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      addModalShow: false,
      qty: 0
    };
    this.incrementItem = this.incrementItem.bind(this);
    this.decreaseItem = this.decreaseItem.bind(this);
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

  incrementItem() {
    const data = this.state.product;
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.addToCart(data);
  }

  decreaseItem() {
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
    const addModalClose = () =>
      this.setState({ addModalShow: false });
    if (this.state.product) {
      const data = this.state.product;
      return (
        <div className="container">
          <div>
            <div className="paddingCard cardBorder">
              <div className="paddingCard"></div>
              <div className="col text-center">
                <img
                  src={data.image}
                  className="round w-75 p-3"
                  alt={data.name}
                />
              </div>
              <div className="col">
                <div className=" text-center">
                  <h2>{data.name}</h2>
                  <div className="paddingCard"></div>
                  <div className="fontSizeTest text-center">
                    <b>{data.shortDescription}</b>
                  </div>

                  <div className="paddingCard"></div>

                  <div>{data.longDescription}</div>

                  <div className="paddingCard"></div>

                  <div className="text-muted text-center">
                    ${(data.price / 100).toFixed(2)}
                  </div>

                  <div>
                    <span
                      className=""
                      onClick={() => this.setState({ addModalShow: true })}
                    >
                      <div
                        type="button"
                        className="btn btn-primary"
                        onClick={this.incrementItem}
                      >
                        Add to cart
                      </div>
                    </span>{' '}
                  </div>

                  <AddedtoCartModal
                    qty={this.state.qty}
                    incrementItem={this.incrementItem}
                    show={this.state.addModalShow}
                    onHide={addModalClose}
                    setView={this.props.setView}
                  />
                </div>
              </div>
            </div>
            <div className="divider"></div>

            <div className="container">
              <SocialMediaAlert />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
