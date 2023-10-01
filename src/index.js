import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Contact from './Contact';
import AboutUs from './AboutUs';
import Login from './Login';

import { Hyd } from './Contact';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Hyd />
    <App />
  </StrictMode>
);
