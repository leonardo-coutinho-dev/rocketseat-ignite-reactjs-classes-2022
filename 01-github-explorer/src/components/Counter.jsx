import { useState } from 'react';

export function Counter() {
  let [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <>
      <h2 id="counter-number">{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </>
  );
}
