import React from 'react';

export default class Alert extends React.Component {
  render() {
    return (
      <div className="paddingCard container text-center">
        <h1 className="redFont">Please fill out all inputs</h1>
        <button
          type="submit"
          className="btn btn-success"
          onClick={() => this.props.setView('checkout', {})}
        >Cart
        </button>
      </div>
    );
  }
}
