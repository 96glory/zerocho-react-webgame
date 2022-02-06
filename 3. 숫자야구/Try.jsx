import React, { Component } from 'react';

class Try extends Component {
  render() {
    return (
      <li key={this.props.index + 1}>
        {this.props.index} : <b>{this.props.value.fruit}</b> - {this.props.value.taste}
      </li>
    );
  }
}

export default Try;
