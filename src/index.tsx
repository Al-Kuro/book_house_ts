import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { store } from "./store";
import backgroundImg from "./images/backgroundImg.png";

const Global = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root {
    background: rgb(191,190,224);
    background: linear-gradient(180deg, rgba(191,190,224,1) 0%, rgba(214,214,255,1) 100%);
    background: url(${backgroundImg});
    min-height: 100vh;
    height: 100% !important;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>,
  document.getElementById("root")
);
