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
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="redFont text-center"> WARNING</h4>
            <p className="redFont text-center">
              AS A REMINDER, THIS IS AN ONLINE STORE <b>DEMO</b>. PLEASE{' '}
              <b>DO NOT</b> PROVIDE REAL SENSITIVE INFORMATION
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn btn-danger col align-self-center"
              onClick={this.props.onHide}
            >
              I AGREE
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
