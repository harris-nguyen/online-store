import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class CheckoutModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backdrop: false,
      show: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ show: false });
  }

  open() {
    this.setState({ show: true });
  }

  render() {
    const { backdrop, show } = this.state;
    return (
      <div>
        <Modal
          className="modalBackGround"
          backdrop={backdrop}
          show={show}
          onHide={this.close}
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          inline
          value={backdrop}
          onChange={value => {
            this.setState({ backdrop: value });
          }}
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
