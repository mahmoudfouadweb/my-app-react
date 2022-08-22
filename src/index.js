import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LikedPostProvider } from './store/context-like';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LikedPostProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LikedPostProvider>
);
