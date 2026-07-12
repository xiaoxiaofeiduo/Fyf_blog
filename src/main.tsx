import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './vendor/animal-island-ui.css';
import './styles.css';
import { App } from './App';
import { MotionSystem } from './components/MotionSystem';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <MotionSystem><App /></MotionSystem>
    </HashRouter>
  </React.StrictMode>
);
