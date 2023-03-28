// import
const path = require("path"); // 절대 경로 명시하기 위해 사용
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    // resolve - 첫번째 경로와 두번째 경로를 합쳐주는 역할
    // __dirname - 현재 파일의 실제 경로 의미함
    // path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
    // 즉 현재 파일이 있는 경로에 있는 dist 폴더에 main.js라는 파일명으로 반환됨
    // 따로 지정해주지 않아도 자동 생성됨
    clean: true, // 기존 만들었던 파일 제거
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader", // 해석된 내용 삽입
          "css-loader", // js에서 css를 해석
          // "postcss-loader", // 공급 업체 접두사 적용
          "sass-loader", // scss 해석
        ],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  // entry의 js 파일과 아래의 html 파일을 합친 합본의 결과물이 생성됨
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }], // 복사되어 저장됨
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
