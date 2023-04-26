import React, { useState } from 'react';
import './counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p class="count">Count: {count}</p>
      <div class = "container2">
        <button class="add" onClick={increment}>Add</button>
        <button class="sub" onClick={decrement}>Sub</button>
      </div>
    </div>
  );
}

export default Counter;
