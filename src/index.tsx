import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './App.scss';

const App = () => {
  return (
    <div>Hello world</div>
  );
};

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container as Element);
root.render(<App />);