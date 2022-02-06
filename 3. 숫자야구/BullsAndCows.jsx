import React, { useState, useRef } from 'react';

const BullsAndCows = () => {
  const [word, setWord] = useState('영광');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value && value[0] === word[word.length - 1]) {
      setResult((prevResult) => {
        return '정답';
      });
      setWord((prevWord) => {
        return value;
      });
      setValue('');
    } else {
      setResult('오답');
      setValue('');
    }
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />
        <button>입력</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

export default BullsAndCows;
