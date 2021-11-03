import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import media from "./responsive";
import { store } from "./store";

const Global = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Architects Daughter', cursive;
  }
  #root {
    background: linear-gradient(179deg, #2faac8,#40cc62,#bbee7d);  
    min-height: 100vh;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>,
  document.getElementById("root")
);
