import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ClickModal extends React.Component {
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
            UNDERSTOOD
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
