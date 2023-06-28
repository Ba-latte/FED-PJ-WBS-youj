// public/index.html 페이지에 적용되는 컴포넌트

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/common/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);