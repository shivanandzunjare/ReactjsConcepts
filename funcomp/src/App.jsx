import { useState } from 'react'



function App() {
  const sayHello = (name) => {
    alert(`Hello, ${name}`);
  }
  return (
    <>
    <button onClick={() => sayHello("Alice")}> Greet</button>
    </>
  )
}
export default App
