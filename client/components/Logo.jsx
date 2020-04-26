import React from 'react';

export default class Logo extends React.Component {
  render() {
    return (
      <div className="">
        <div className="text-center fade-in">
          <img
            src="./images/brandlogo.png"
            className="w-100 p-3 logoHeight"
            alt="logo"
          />
        </div>
      </div>
    );
  }
}
