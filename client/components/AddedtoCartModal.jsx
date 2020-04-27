import React from 'react';
import { Modal } from 'react-bootstrap';

export default class AddedtoCartModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    };
  }

  render() {
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Item Added
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Would you like to add more?</h4>
            <button
              className="btn btn-success"
              onClick={() => this.props.IncrementItem()}
            >
              +
            </button>{' '}
            <span>QTY {this.props.qty}</span>
          </Modal.Body>
          <Modal.Footer>
            <div
              className="pointer"
              onClick={() => this.props.setView('catalog', {})}
            >
              <button className="btn btn-primary" onClick={this.props.onHide}>
                continue shopping
              </button>
            </div>
            <div>
              <button
                className="pointer btn btn-success"
                onClick={() => this.props.setView('cart', {})}
              >
                cart
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// className="col-8 pointer"
//             onClick={() => this.props.setView('catalog', {})}
