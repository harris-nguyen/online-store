import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="row navbar black">
          <div
            className="whiteFont pad pointer col"
            onClick={() => this.props.setView('catalog', {})}
          >
            {this.props.text}
          </div>

          <div className="whiteFont pad whiteFont pad border fade-in">
            by HARRIS NGUYEN
          </div>

          <div
            className="col text-right cartSize pointer whiteFont pad"
            onClick={() => this.props.setView('cart', {})}
          >
            {this.props.cartAmount} {'items'}
            <span className="fas fa-shopping-cart"></span>
          </div>
        </nav>
      </div>
    );
  }
}
