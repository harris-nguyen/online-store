import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="row whiteFont navbar black ">
          <div className="col-8">{this.props.text}</div>
          <div className="col-4">cart</div>
        </div>
      </div>
    );
  }
}