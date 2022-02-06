import React, { Component, useState, useRef } from 'react';
import Try from './Try';

// 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 경우
function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const choosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(choosen);
  }
  return array;
}

class BullsAndCows extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [], // react의 array state는 push할 수 없다.
  };

  // 화살표 함수는 bind this를 자동적으로 해준다.
  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join('')) {
      this.setState({
        result: '홈런',
        tries: [...this.state.tries, { try: this.state.value, result: '홈런!' }],
      });
      alert('restart the game!');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: [],
      });
    } else {
      const answerArray = this.state.value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        this.setState({
          result: `You tried over 10 times. You lose! (answer = ${answer.join(',')})`,
        });
        alert('restart the game!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [
            ...this.state.tries,
            { try: this.state.value, result: `${strike} strikes, ${ball} balls.` },
          ],
          value: '',
        });
      }
    }
  };

  onChangeInput = (e) => {
    console.log('this.state.answer', this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => {
            // key는 고유한 값 (index는 성능 최적화에 문제가 생기므로, 추천하지 않는다.)
            // 화살표 함수에서 중괄호가 없으면, 곧바로 리턴한다.
            return <Try key={`${i + 1}차 시도 : `} tryInfo={v} />;
          })}
        </ul>
      </>
    );
  }
}

export default BullsAndCows;
