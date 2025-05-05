import React, {  useRef, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const renders = useRef(0);
    renders.current += 1;
  return (
    <div>
        <p> count : {count}</p>
        <p> components renders {renders.current} times</p>
        <button onClick={() => setCount(prev = prev + 1)}>Increment</button>
      
    </div>
  )
}

export default Counter
