import React, { Component, useState, useRef } from 'react';

const rockPaperScissorsCoords = {
  rock: '0',
  paper: '-284px',
  scissors: '-142px',
};

const scores = {
  rock: 0,
  paper: -1,
  scissors: 1,
};

class RockPaperScissors extends Component {
  state = {
    result: '',
    imgCoord: '0',
    score: 0,
  };

  interval;

  // class's lifecycle

  // render가 처음 실행되고, 성공적으로 실행되었다면 componenetDidMount가 실행된다.
  // componenetDidMount는 리랜더링을 통해 실행되지 않는다.
  // 보통 비동기 요청을 많이 한다.
  componentDidMount() {
    this.interval = setInterval(() => {
      const { imgCoord } = this.state;
      if (imgCoord === rockPaperScissorsCoords.rock) {
        this.setState({
          imgCoord: rockPaperScissorsCoords.scissors,
        });
      } else if (imgCoord === rockPaperScissorsCoords.scissors) {
        this.setState({
          imgCoord: rockPaperScissorsCoords.paper,
        });
      } else if (imgCoord === rockPaperScissorsCoords.paper) {
        this.setState({
          imgCoord: rockPaperScissorsCoords.rock,
        });
      }
    }, 1000);
  }

  // 리랜더링 후에 componentDidUpdate이 실행된다.
  componentDidUpdate(prevProps, prevState) {}

  // 컴포넌트가 제거되기 직전에 componentWillUnmount가 실행된다.
  // 예시 : 부모 컴포넌트가 자식 컴포넌트를 제거하는 경우
  // 비동기 요청이 있을 경우, 여기서 정리한다.
  componentWillUnmount() {
    clearInterval(this.interval);
  }

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
              this.onClickBtn('rock');
            }}
          >
            rock
          </button>
          <button
            id="paper"
            className="btn"
            onClick={() => {
              this.onClickBtn('paper');
            }}
          >
            paper
          </button>
          <button
            id="scissors"
            className="btn"
            onClick={() => {
              this.onClickBtn('scissors');
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
