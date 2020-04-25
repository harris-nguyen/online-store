import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import CartSummary from './CartSummary';
import CheckoutForm from './CheckoutForm';
import Alert from './alert';
import ClickModal from './ClickModal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      cart: [],
      view: { name: 'catalog', params: {} },
      addModalShow: true
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.turnoff = this.turnoff.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
    this.setState({ addModalShow: true });

    fetch('/api/health-check')
      .then(res => res.json())
      .then(data =>
        this.setState({ message: data.message || data.error })
      )
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  turnoff() {
    this.setState({ addModalShow: false });
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

  removeFromCart(id) {
    const idSelected = this.state.cart.findIndex(
      e => e.cartItemId === id
    );

    fetch(`/api/cart/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        const newArr = [...this.state.cart];
        newArr.splice(idSelected, 1);
        this.setState({
          cart: newArr
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

  placeOrder(orderObj) {
    if (
      orderObj.name.length !== 0 &&
                     orderObj.creditCard.length !== 0 &&
                     orderObj.shippingAddress.length !== 0
    ) {
      fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderObj)
      })
        .then(res => res.json())
        .then(order => {
          this.setState({
            cart: [],
            view: { name: 'catalog', params: {} }
          });
        });
    } else {
      this.setState({
        view: {
          name: 'alert'
        }
      });
    }
  }

  setView(name, params) {
    this.setState({ view: { name, params } });
  }

  render() {
    const addModalClose = () => this.setState({ addModalShow: false });
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
          <ClickModal show={this.state.addModalShow} onHide={addModalClose} />
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
              removeFromCart={this.removeFromCart}
              cartItems={this.state.cart}
              setView={this.setView}
            />
          </div>
        </div>
      );
    } else if (view.name === 'checkout') {
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
            <CheckoutForm
              onSubmit={this.placeOrder}
              cartItems={this.state.cart}
              setView={this.setView}
            />
          </div>
        </div>
      );
    } else if (view.name === 'alert') {
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
            <Alert setView={this.setView} />
          </div>
        </div>
      );
    }
  }
}
