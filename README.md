code with song "Thunder" by Imagine Dragons

Code quality

- ESLint
- Prettier
- Husky pre-commit
- PropTypes
- Sentry.io (修先)
- Storybook (看情況)
- mock api (看情況)
- api log (看情況)

4. style-component  
   4.1 add a custom pages/\_document.js (if you don't have one)  
   4.2 yarn add -D babel-plugin-styled-components  
   4.3 add .babelrc  
   4.4 better-debugging: https://styled-components.com/docs/tooling#better-debugging

5. 遇到問題: Next dev with React 18, Always render twice
   如果 initial mount call api 然後 api 錯誤，例如 status 413 跳錯誤提示
   如果 reactStrictMode: true 就會打兩次 api 跳出錯誤提示兩次

6. 文字區塊斷行
   [如何用 CSS 強制文字換行: word-break, word-wrap, overflow-wrap](https://shubo.io/word-wrap-vs-word-break/)
