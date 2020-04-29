import React from 'react';

export default class ProductItemList extends React.Component {
  render() {
    return (
      <div
        className="col-6 mb-5 zoom pointer"
        onClick={() =>
          this.props.setView('details', { productId: this.props.productId })
        }
      >
        <div className=" text-center boxShadow">
          <div className=""></div>
          <img
            src={this.props.image}
            className="round w-100 p-3 image "
            alt={this.props.name}
          />
        </div>
      </div>
    );
  }
}

//         <h5 className="card-title">{this.props.name}</h5>
//           <small className="text-muted">{`$${this.props.price}`}</small>
//           <p className="card-text">{this.props.shortDesc}</p>
