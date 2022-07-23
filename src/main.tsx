import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const htmlFragment = document.getElementById('root') as HTMLElement;
const root = createRoot(htmlFragment);

root.render(<App />);
