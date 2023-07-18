import React, { useState } from 'react';
import Counter from './Counter';

const App = () => {
  const [counters, setCounters] = useState([{ id: 1, initialValue: 0 }]);
  const [counterId, setCounterId] = useState(1);

  const handleAddCounter = () => {
    setCounterId((prevCounterId) => prevCounterId + 1);
    setCounters((prevCounters) => [...prevCounters, { id: prevCounterId + 1, initialValue: 0 }]);
  };

  const handleRemoveCounter = (id) => {
    if (counters.length > 1) {
      setCounters((prevCounters) => prevCounters.filter((counter) => counter.id !== id));
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Counter App</h1>
      <button onClick={handleAddCounter} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        New Counter
      </button>
      <div className="grid gap-4 grid-cols-2">
        {counters.map((counter) => (
          <div key={counter.id}>
            <Counter
              initialValue={counter.initialValue}
              onRemove={() => handleRemoveCounter(counter.id)}
              showRemoveButton={counters.length > 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
