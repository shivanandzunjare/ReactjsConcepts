import { useState } from 'react'
import Parent from './Parent'
import Example from './Example'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Example /> */}
      <Parent />
    </>
  )
}

export default App
