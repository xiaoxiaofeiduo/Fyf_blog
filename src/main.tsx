import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Cursor } from 'animal-island-ui';
import 'animal-island-ui/style';
import './styles.css';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Cursor>
        <App />
      </Cursor>
    </HashRouter>
  </React.StrictMode>
);
