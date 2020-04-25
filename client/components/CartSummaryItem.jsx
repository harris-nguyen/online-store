import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className="container cardMargin boxShadowCart">
        <div className="row border paddingCard">
          <div className="col">
            <img
              src={this.props.image}
              alt={this.props.name}
              className="card-img-top"
            />
          </div>
          <div className="col align-self-center">
            <h5>{this.props.name}</h5>
            <div className="text-muted">
              ${(this.props.price / 100).toFixed(2)}
            </div>
            <div>{this.props.shortDesc}</div>
            <div>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.props.onclickDel}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
