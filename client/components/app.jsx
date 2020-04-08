import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import CartSummary from './CartSummary';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      cart: [],
      view: { name: 'catalog', params: {} }
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.getCartItems();

    fetch('/api/health-check')
      .then(res => res.json())
      .then(data =>
        this.setState({ message: data.message || data.error })
      )
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => {
        this.setState({
          cart: data
        });
      })
      .catch(err => console.error(err));
  }

  addToCart(product) {
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(cartItem =>
        this.setState({ cart: this.state.cart.concat(cartItem) })
      );
  }

  setView(name, params) {
    this.setState({ view: { name, params } });
  }

  render() {
    const view = this.state.view;
    if (view.name === 'catalog') {
      return (
        <div className="container">
          <div>
            <Header
              setView={this.setView}
              text={'Online Store'}
              cartAmount={this.state.cart.length}
            />
          </div>

          <div>
            <ProductList setView={this.setView} />
          </div>

        </div>
      );
    } else if (view.name === 'details') {
      return (
        <div className="container">
          <div>
            <Header
              setView={this.setView}
              text={'Online Store'}
              cartAmount={this.state.cart.length}
            />
          </div>

          <div>
            <ProductDetails
              setView={this.setView}
              productID={view.params}
              addToCart={this.addToCart}
            />
          </div>
        </div>
      );
    } else if (view.name === 'cart') {
      return (
        <div className="container">
          <div>
            <Header
              setView={this.setView}
              text={'Online Store'}
              cartAmount={this.state.cart.length}
            />
          </div>
          <div>
            <CartSummary
              cartItems={this.state.cart}
              setView={this.setView} />
          </div>
        </div>
      );
    }
  }
}
