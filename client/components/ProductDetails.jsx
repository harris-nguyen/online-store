import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };

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

  render() {
    if (this.state.product) {
      const data = this.state.product;
      return (
        <div>
          <div>
            <div className="row ">
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
                <div className="fontSizeTest">
                  {data.shortDescription}
                </div>
                <button
                  onClick={() => this.props.addToCart(data)}
                  type="button"
                  className="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
              <div className="m-3">
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
