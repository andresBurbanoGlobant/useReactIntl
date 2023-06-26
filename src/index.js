import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wrapper from './components/Wrapper';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Wrapper>
    <App />
  </Wrapper>
);
