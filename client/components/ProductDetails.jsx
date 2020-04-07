import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };

  }

  componentDidMount() {
    fetch('/api/products/1')
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

  render() {
    if (this.state.product) {
      const data = this.state.product;
      return (
        <div>
          <div
            className="fas fa-home text-muted"
            onClick={() =>
              this.props.setView('catalog', { productId: this.props.productId })
            }
          >
            Back to Catalog
          </div>
          <div>
            <div className="row bgc">
              <div className="col-6 oneProductFont">
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
                <div className="oneProductFont ">{data.shortDescription}</div>
                <button
                  onClick={() => this.props.addToCart(data)}
                  type="button"
                  className="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
              <div className=" textPadding oneProductFont m-3">
                {data.longDescription}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
