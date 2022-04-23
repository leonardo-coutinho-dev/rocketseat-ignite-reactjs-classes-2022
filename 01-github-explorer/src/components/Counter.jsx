import { useState } from 'react';

export function Counter() {
  let [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <>
      <p id="p-counter">counter ~</p>
      <h2 id="counter-number">{counter}</h2>
      <button type="button" onClick={increment}>
        Increment +1
      </button>
    </>
  );
}
