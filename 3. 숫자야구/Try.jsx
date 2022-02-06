import React, { Component } from 'react';

class Try extends Component {
  render() {
    return (
      <li key={this.props.key}>
        <div>{this.props.tryInfo.try}</div>
        <div>{this.props.tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;
