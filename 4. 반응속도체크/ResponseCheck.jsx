import React, { Component, useState, useRef } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: 'Please click to start.',
    result: [],
  };

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: 'Click when it turns blue.',
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: 'Click Now!',
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~ 3초 랜덤
    } else if (state === 'ready') {
      clearTimeout(this.timeout);
      this.setState({
        state: 'waiting',
        message: 'You so fast! Please click when it turns blue.',
      });
    } else if (state === 'now') {
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: 'waiting',
          message: 'Please click to start.',
          result: [...prevState.result, this.endTime - this.startTime],
        };
      });
      console.log(result);
    }
  };

  renderAverage = () => {
    const { result } = this.state;
    return this.state.result.length === 0 ? null : (
      <div>Avg. Time : {this.state.result.reduce((a, c) => a + c) / this.state.result.length} ms</div>
    );
  };

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheck;
