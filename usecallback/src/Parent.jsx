import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  //  This always uses the latest count value
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <p>Parent Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <Child increment={increment} />
    </div>
  );
}

function Child({ increment }) {
  console.log('Child re-rendered');
  return <button onClick={increment}>Increment in Child</button>;
}

export default Parent;
