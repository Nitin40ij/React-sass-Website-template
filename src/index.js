import React from 'react';
import ReactDOMclient from 'react-dom/client';
import App from './App';


const container=document.getElementById('root');
const root=ReactDOMclient.createRoot(container);
root.render(<App />)


