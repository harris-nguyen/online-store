import React from 'react';

export default class Logo extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="paddingCard">{''}</div>
        <div className="text-center fade-in">
          <img
            src="./images/brandlogo.png"
            className="card-img-top"
            alt="logo"
          />
        </div>
      </div>
    );
  }
}
