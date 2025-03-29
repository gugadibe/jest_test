import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={({ target }) => {
          setAmount(parseInt(target.value));
        }}
      />
      <button
        onClick={() => {
          setAmount(amount + 1);
        }}
      >
        Set
      </button>
    </div>
  );
};
