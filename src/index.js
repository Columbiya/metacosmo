import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';
import { MoralisProvider } from 'react-moralis';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl='https://vusm8ozmuej5.usemoralis.com:2053/server' appId='o2oFW6qbyjQwvtGtHhtBnHqYQB5Zz98W7d5LhMwt'>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App /> 
        </BrowserRouter>
      </ApolloProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
