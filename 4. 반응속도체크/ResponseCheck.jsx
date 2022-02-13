import React, { Component, useState, useRef } from 'react';

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('Please click to start.');
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('Click when it turns blue.');

      timeout = setTimeout(() => {
        setState('now');
        setMessage('Click Now!');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~ 3초 랜덤
    } else if (state === 'ready') {
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('You so fast! Please click when it turns blue.');
    } else if (state === 'now') {
      endTime.current = new Date();
      setState('waiting');
      setMessage('Please click to start.');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
      console.log(result);
    }
  };
  const onReset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>Avg. Time : {result.reduce((a, c) => a + c) / result.length} ms</div>
        <button onClick={onReset}>RESET</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;
