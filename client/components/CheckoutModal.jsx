import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class CheckoutModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    };
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          WARNING
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4> Modal</h4>
          <p>
            TEST TEST
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger" onClick={this.props.onHide}>
            I AGREE
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
