import React from 'react';

export default class Hover extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }

  render() {
    return (
      <div className="container text-center">
        <div
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}
        >
          {this.props.children(this.state.hovered)}
        </div>
      </div>
    );
  }
}
