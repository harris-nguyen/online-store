import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ClickModal extends React.Component {
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
            {"Welcome to Stay ambitious' online store DEMO"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4></h4>
          <p>
            Due to the fact that this is an online store <b>DEMO</b>, all items
            are only for display and not to be purchased as we are out of
            inventory. Please do not provide sensitive information while
            checking out. For real orders, please visit the link below for
            contact information:
          </p>
          <a
            className=" whiteFont pad zoom pointer"
            onClick={() =>
              window.open('https://stayambitious.harrisitowynn.com/', '_blank')
            }
          >
            <div className="redFont container text-center">
              Stay ambitious &reg;
            </div>
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-success col align-self-center"
            onClick={this.props.onHide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
