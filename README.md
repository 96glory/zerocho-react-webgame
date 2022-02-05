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
