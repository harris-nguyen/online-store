import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class AddedtoCartModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    };
  }

  render() {
    // eslint-disable-next-line no-console
    console.log('modal', this.props.show);
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                           Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>item placed Modal</h4>
          <p>
                           hiiiiiiii
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-success"
            onClick={this.props.onHide}
          >
                           Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
