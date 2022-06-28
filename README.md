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

1. style-component  
   1.1 add a custom page `_document.js` (if you don't have one)  
   1.2 yarn add -D babel-plugin-styled-components  
   1.3 add .babelrc  
   1.4 better-debugging: https://styled-components.com/docs/tooling#better-debugging

2. 遇到問題: Next dev with React 18, Always render twice
   如果 initial mount call api 然後 api 錯誤，例如 status 413 跳錯誤提示
   如果 reactStrictMode: true 就會打兩次 api 跳出錯誤提示兩次

3. 文字區塊斷行
   [如何用 CSS 強制文字換行: word-break, word-wrap, overflow-wrap](https://shubo.io/word-wrap-vs-word-break/)

4. client 打 api 成功  
   4.1 api response 200: 有資料 api response data stored in global  
   4.2 api response 200: 無資料  
   4.3 api response 非 200: 跳出 error notification  
   4.4 loading start => api => loading end

5. 呼叫 useContext 的 component 總是會在 context 值更新時重新 render。如果重新 render component 的操作很昂貴，你可以透過 memoization 來最佳化。(官方文件)（如何證實舉個例子實現這句話，也是蠻有趣的）  
   5.1. createContext: creat a box 裝 state  
   5.2. useContext: 如果要拿 box 裡的 state

6. lodash.debounce  
   6.1 npm web search lodash.debounce 可以看到 jdalton published

7. react-portal  
   [trendmicro-frontend/react-portal](https://github.com/trendmicro-frontend/react-portal)

8. infinite scrolling : new IntersectionObserver  
   8.1 使用 callback ref 取得 DOM [How can I measure a DOM node?](https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node)  
   8.2 io.observe(element);  
   8.3 io.unobserve(element);  
   8.4 io.disconnect();

9. useReducer  
   9.1 context multiple reducers 是符合 context 的設計嗎？  
   9.2 WHY no combineReducers  
   9.3 以 redux 的架構，combineReducer 是官方提供的 method，但 combine multiple reducers in React Hooks 合適嗎
