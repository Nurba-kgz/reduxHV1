import React from 'react';

const Counter = ({ count, onIncrement, onDecrement, onIncrementByTen, onDecrementByTen, onReset }) => (
    <div>
        <h2>Counter: {count}</h2>
        <button onClick={onIncrement}>+1</button>
        <button onClick={onDecrement}>-1</button>
        <button onClick={onIncrementByTen}>+10</button>
        <button onClick={onDecrementByTen}>-10</button>
        <button onClick={onReset}>Reset</button>
    </div>
);

export default Counter;