import React, { Component, useState, useRef } from 'react';

class RockPaperScissors extends Component {
  state = {
    result: '',
    imgCoord: 0,
    score: 0,
  };

  // class's lifecycle

  // render가 처음 실행되고, 성공적으로 실행되었다면 componenetDidMount가 실행된다.
  // componenetDidMount는 리랜더링을 통해 실행되지 않는다.
  componentDidMount() {}

  // 리랜더링 후에 componentDidUpdate이 실행된다.
  componentDidUpdate(prevProps, prevState) {}

  // 컴포넌트가 제거되기 직전에 componentWillUnmount가 실행된다.
  // 예시 : 부모 컴포넌트가 자식 컴포넌트를 제거하는 경우
  componentWillUnmount() {}

  onClickBtn = () => {};

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{ background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}
        ></div>
        <div>
          <button
            id="rock"
            className="btn"
            onClick={() => {
              onClickBtn('rock');
            }}
          >
            rock
          </button>
          <button
            id="paper"
            className="btn"
            onClick={() => {
              onClickBtn('paper');
            }}
          >
            paper
          </button>
          <button
            id="scissors"
            className="btn"
            onClick={() => {
              onClickBtn('scissors');
            }}
          >
            scissors
          </button>
        </div>
        <div>{result}</div>
        <div>Score : {score}</div>
      </>
    );
  }
}

export default RockPaperScissors;
