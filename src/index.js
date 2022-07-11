import React from 'react';
import ReactDOM from 'react-dom/client';
import DummyLogin from './DummyLogin';
import '@telekom/scale-components/dist/scale-components/scale-components.css';
import {defineCustomElements} from '@telekom/scale-components/loader';
import '@telekom/scale-components/dist/scale-components/scale-components.css';
defineCustomElements(window);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DummyLogin />
  </React.StrictMode>,
);
