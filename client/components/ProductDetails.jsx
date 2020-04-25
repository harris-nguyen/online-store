import React from 'react';
import AddedtoCartModal from './AddedtoCartModal';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      addModalShow: false,
      clicks: 1
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
    this.setState({ clicks: this.state.clicks + 1 });
  }

  DecreaseItem() {
    this.setState({ clicks: this.state.clicks - 1 });
  }

  render() {
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
                    <button
                      onClick={() => this.props.addToCart(data)}
                      type="button"
                      className="btn btn-primary"
                    >
                      Add to Cart {this.state.clicks}
                    </button>
                  </span>
                  {' '}
                  <button onClick={this.IncrementItem}>+</button>
                  <button onClick={this.DecreaseItem}>-</button>

                  <AddedtoCartModal
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
