import React from 'react';
import { Modal } from 'react-bootstrap';

export default class DeleteModal extends React.Component {
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
          <Modal.Body>Are you sure you want to delete?</Modal.Body>
          <div className="container">
            <div>
              <img
                src={this.props.image}
                alt={this.props.name}
                className="card-img-top"
              />
            </div>
            <div>{this.props.name}</div>
            <div>${(this.props.price / 100).toFixed(2)}</div>
            <div>{this.props.shortDesc}</div>
          </div>
          <Modal.Footer>
            <div>
              <button className="btn btn-primary" onClick={this.props.onHide}>
                No
              </button>{' '}
              <div onClick={this.props.onHide}>
                <button
                  className="btn btn-danger"
                  onClick={this.props.onclickDel}
                >
                  Yes
                </button>
              </div>
            </div>
            <div></div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
