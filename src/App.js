import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="Hello">
      <h1>Counter: {count}</h1>
      <button className="Button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="Button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button className="Button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;