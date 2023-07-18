import React, { useState } from 'react';

const Counter = ({ initialValue, onRemove, showRemoveButton }) => {
  const [count, setCount] = useState(initialValue || 0);
  const [counterName, setCounterName] = useState('');

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(initialValue || 0);
  };

  const handleNameChange = (event) => {
    setCounterName(event.target.value);
  };

  const handleRemove = () => {
    onRemove();
  };

  return (
    <div className="border rounded-lg shadow-md p-4 m-2">
      <input
        type="text"
        value={counterName}
        onChange={handleNameChange}
        placeholder="Enter Counter Name"
        className="border rounded-md p-2 mb-2 w-full"
      />
      <h2 className="text-xl font-semibold">{counterName || 'Counter'}</h2>
      <p className="text-lg">Count: {count}</p>
      <div className="flex gap-2 mt-2">
        <button onClick={handleIncrement} className="bg-green-500 text-white px-4 py-2 rounded">
          Increment
        </button>
        <button onClick={handleDecrement} className="bg-red-500 text-white px-4 py-2 rounded">
          Decrement
        </button>
        <button onClick={handleReset} className="bg-blue-500 text-white px-4 py-2 rounded">
          Reset
        </button>
        {showRemoveButton && (
          <button onClick={handleRemove} className="bg-gray-500 text-white px-4 py-2 rounded">
            Remove Counter
          </button>
        )}
      </div>
    </div>
  );
};

export default Counter;
