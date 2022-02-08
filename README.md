# 웹 게임을 만들며 배우는 React

- [강의 링크](https://www.inflearn.com/course/web-game-react/dashboard)

## webpack & babel 설정

- webpack : 여러 파일을 하나의 js 파일로 압축해주는 기능
- babel : js로 인식될 수 있도록 여러 파일을 번역해주는 기능

```shell
npm init

npm i react react-dom

# -D : Development 환경으로 설치하겠다.

npm i -D webpack webpack-cli

npm i -D @babel/core
npm i -D @babel/preset-env
npm i -D @babel/preset-react
npm i -D @babel/plugin-proposal-class-properties

# 실행 명령어

npx webpack
webpack serve --env development # 아래 명령어 필요 시

npm i -D react-refresh @pmmmwh/react-refresh-webpack-plugin
npm i -D webpack-dev-server

npm i babel-loader
```

## require vs import

- 두 키워드 모두 외부 라이브러리를 불러오는 코드

- require : Node에서 사용되고 있는 CommonJS 키워드
  ```javascript
  const React = require('react');
  const { Component } = React;
  ```
- import : ES6 키워드, export default로 내보낸 것을 불러올 수 있다.
  ```javascript
  import React, { Component } from 'react';
  ```
- require는 node에서만 사용되지만, babel이 import로 변환을 해주기 때문에 호환되는 것처럼 보인다.

## default export VS named export

1. default export

- default로 선언된 모듈은 하나의 파일에서 단 하나의 변수 또는 클래스 등으로만 export할 수 있다.

```javascript
const Verification = () => {
  / ...
}

export default Verification;
```

```javascript
import Verification from '../VerificationPage';
```

2. named export

- 한 파일 내에서 여러 변수/클래스를 export하는 것이 가능하다.
- 단, import하는 곳에서 중괄호로 가져와야 한다.

```javascript
export class MyFirstClass {
  /* ... */
}
export class MySecondClass {
  /* ... */
}
```

```javascript
import { MyFirstClass, MySecondClass } from './MyClass';

// or 모두 가져와야 하는 경우.

import * as MyHello from './MyClass';
```

## shouldComponentUpdate()

- 랜더링 수행 타이밍

  - props가 변경되었을 때
  - state가 변경되었을 때 (더 자세하게, setState를 호출하였을 때)
  - 부모 컴포넌트가 랜더링 되었을 때

- 다시 랜더링을 할지 말지 정의를 하는 함수

```js
shouldComponentUpdate(newxProps, nextState, nextContext) {
  if (this.state.counter !== nextState.counter) {
    return true;
  }
  return false;
}
```
