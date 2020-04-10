import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="row whiteFont navbar black ">
          <div
            className="col-8 pointer"
            onClick={() => this.props.setView('catalog', {})}
          >
            {this.props.text}
          </div>
          <div
            className="col-4 text-right cartSize pointer"
            onClick={() => this.props.setView('cart', {})}
          >
            {this.props.cartAmount} {'items'}
            <span className="fas fa-shopping-cart"></span>
          </div>
        </div>
      </div>
    );
  }
}
