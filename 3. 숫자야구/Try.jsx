import React, { PureComponent, Component, memo } from 'react';
/*
class Try extends PureComponent {
  render() {
    const { key, tryInfo } = this.props;
    return (
      <li key={key}>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}
*/

const Try = memo(({ key, tryInfo }) => {
  return (
    <li key={key}>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

/*
const Try = (props) => {
  const { key, tryInfo } = props;
  return (
    <li key={key}>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};
*/

export default Try;
