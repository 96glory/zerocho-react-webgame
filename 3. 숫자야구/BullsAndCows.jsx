import React, { Component, useState, useRef } from 'react';

// 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 경우
function getNumbers() {}

class BullsAndCows extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = () => {};

  onChangeInput = () => {};

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
          {['1', '2', '3', '4', '5'].map((v) => {
            return <li>{v}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default BullsAndCows;
