import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components/macro';
import { App } from './App';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
