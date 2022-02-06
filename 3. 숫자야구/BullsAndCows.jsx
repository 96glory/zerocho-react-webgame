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
          {[
            { fruit: '사과', taste: '맛있다' },
            { fruit: '바나나', taste: '맛있다' },
            { fruit: '포도', taste: '씨가 싫다' },
            { fruit: '귤', taste: '시다' },
            { fruit: '감', taste: '떫다' },
          ].map((v, i) => (
            // key는 고유한 값 (index는 성능 최적화에 문제가 생기므로, 추천하지 않는다.)
            // 화살표 함수에서 중괄호가 없으면, 곧바로 리턴한다.
            <li key={i}>
              <b>{v.fruit}</b> - {v.taste}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BullsAndCows;
