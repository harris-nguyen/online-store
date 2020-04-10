import React from 'react';
import CartSummaryItem from './CartSummaryItem';

export default class CartSummary extends React.Component {
  render() {
    const data = this.props.cartItems;
    return (
      <div className="container ">
        <h3 className='text-center'>My Shopping Cart
        </h3>
        <div>
          {data.length === 0 ? (
            <h1>Empty Cart</h1>
          ) : (
            data.map((e, index) => {
              return (
                <CartSummaryItem
                  key={index}
                  name={e.name}
                  shortDesc={e.shortDescription}
                  price={e.price}
                  image={e.image}
                  onclickDel={() => this.props.removeFromCart(e.productId)}
                />
              );
            })
          )}
          <div className="row">
            <div className="col align-items-center">
              <h6 className="totalCostPad cardMargin">
                Total Cost $
                {(data.reduce((a, b) => +a + +b.price, 0) / 100).toFixed(2)}
              </h6>
            </div>
            <div className="col-md-auto"></div>
            <div className="col col-lg-2">
              {data.length === 0 ? (
                ''
              ) : (
                <button
                  type="button"
                  className=" btn btn-success cardMargin"
                  onClick={() => this.props.setView('checkout', {})}
                >
                  Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );

  }
}
