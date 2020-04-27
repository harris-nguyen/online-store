import React from 'react';
import CheckoutModal from './CheckoutModal';
import GreetingLogin from './GreetingLogin';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: '',
      showModal: false
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangecreditCard = this.handleChangecreditCard.bind(this);
    this.handleChangeshippingAddress = this.handleChangeshippingAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ showModal: true });
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangecreditCard(event) {
    this.setState({ creditCard: event.target.value });
  }

  handleChangeshippingAddress(event) {
    this.setState({ shippingAddress: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const orderObj = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    this.props.onSubmit(orderObj);
  }

  render() {
    const addModalClose = () => this.setState({ showModal: false });
    const data = this.props.cartItems;

    return (
      <div className="container">
        <div onClick={() => this.setState({ showModal: false })}>
          <CheckoutModal show={this.state.showModal} onHide={addModalClose} />
        </div>

        <h3 className="text-center paddingCard">CHECKOUT</h3>
        <h6 className="text-muted totalCostPad">
          Order Total: $
          {(data.reduce((a, b) => +a + +b.price, 0) / 100).toFixed(2)}
        </h6>

        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputName"></label>
              <div>Name</div>
              <input
                type="text"
                name={'name'}
                value={this.state.name}
                onChange={this.handleChangeName}
                placeholder="Name"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputCreditCard"></label>
              <div>Credit Card</div>
              <input
                type="text"
                name={'creditCard'}
                value={this.state.creditCard}
                onChange={this.handleChangecreditCard}
                placeholder="Credit Card"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputAddress"></label>
            <div>Address</div>
            <input
              type="text"
              name={'shippingAddress'}
              value={this.state.shippingAddress}
              onChange={this.handleChangeshippingAddress}
              placeholder="Shipping Address"
              className="form-control"
            />
          </div>
          <div className="row">
            <div className="cardMargin">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => this.props.setView('catalog', {})}
              >
                continue shopping
              </button>
            </div>
            <div className="cardMargin">
              <button
                type="submit"
                className="btn btn-success"
                onClick={() => this.props.setView('checkout', {})}
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
        <GreetingLogin />
      </div>
    );
  }
}
