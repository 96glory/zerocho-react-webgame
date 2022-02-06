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

const BullsAndCows = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  const inputRef = useRef(null);

  // 화살표 함수는 bind this를 자동적으로 해준다.
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setResult('홈런');
      setTries([...tries, { try: value, result: '홈런!' }]);

      alert('restart the game!');

      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`You tried over 10 times. You lose! (answer = ${answer.join(',')})`);

        alert('restart the game!');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries([...tries, { try: value, result: `${strike} strikes, ${ball} balls.` }]);
        setValue('');
      }
    }
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    console.log('answer', answer);
    setValue((prevState) => {
      return e.target.value;
    });
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도 : {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          // key는 고유한 값 (index는 성능 최적화에 문제가 생기므로, 추천하지 않는다.)
          // 화살표 함수에서 중괄호가 없으면, 곧바로 리턴한다.
          return <Try key={`${i + 1}차 시도 : `} tryInfo={v} />;
        })}
      </ul>
    </>
  );
};

export default BullsAndCows;
