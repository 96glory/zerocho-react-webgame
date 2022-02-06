import React, { Component } from 'react';

const Try = (props) => {
  const { key, tryInfo } = props;
  return (
    <li key={key}>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};

export default Try;
