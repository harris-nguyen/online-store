import React from 'react';

export default class Mission extends React.Component {
  render() {
    return (
      <div className="backgroundBlack whiteFont">
        <div className="container text-center">
          <div className="paddingCard"></div>
          <div className="paddingCard"></div>
          <div className="paddingCard"></div>
          <div className="text-center whiteFont">
            <b>Mission:</b>
            <div className="paddingCard"></div>
          </div>
          {`"For the believers & doers.
The motivators & leaders.
The brave who aren't afraid to take risk.
We represent you & we are you.
Welcome to our culture."`}
          <div className="paddingCard"></div>
          <div className="paddingCard"></div>
          <div className="paddingCard"></div>
        </div>
      </div>
    );
  }
}
