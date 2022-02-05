const path = require('path');

module.exports = {
  name: 'gugudan-setting',
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

  // entry에 있는 파일을 읽어서 module을 적용한 후 output 파일을 뱉어낸다.
  module: {
    rules: [{
      test: /\.jsx?/, // js와 jsx 파일 (정규 표현식)
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
        compact: true,
      },

    }],
  },

  // 출력
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};