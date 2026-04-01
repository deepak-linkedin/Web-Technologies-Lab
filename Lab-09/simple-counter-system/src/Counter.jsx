import React, { useState } from "react";
import "./App.css";

function Counter() {
  // Initialize counter state with 0
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <h2>Simple Counter</h2>
      <p className="count-value">{count}</p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;