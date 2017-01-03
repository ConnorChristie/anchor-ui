import React from 'react';
import Component from '../../dist/index';
import './app.css';

function App() {
  return (
    <section className="demo">
      <h1>
        <a
          href="https://github.com/anchorchat/anchor-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anchor UI
        </a>
      </h1>
      <Component />
    </section>
  );
}

export default App;
