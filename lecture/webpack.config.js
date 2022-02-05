const path = require('path');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실 서비스 : production
  devtool: 'eval',
  resolve: {
      extensions: ['.js', '.jsx']
  },

  // 입력
  // 입력 파일을 인식해서 require을 통해 가져올 파일들을 전부 output으로 만들어주므로 WordRelay.jsx는 넣어줄 필요가 없다.
  // 확장자를 생략하여, 확장자가 다른 파일명들을 모두 가져올 수 있다. (resolve의 확장자를 확인한다.)
  entry: {
    app: ['./client.jsx'],
  },

  // 출력
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};