import React from 'react';

export default class PurchasedConfirmed extends React.Component {
  render() {
    return (
      <div className="container text-center paddingCard">
        <h1 className="">Thank you for your purchase</h1>
        <button
          type="submit"
          className="btn btn-success"
          onClick={() => this.props.setView('catalog', {})}
        >
          Store
        </button>
      </div>
    );
  }
}
