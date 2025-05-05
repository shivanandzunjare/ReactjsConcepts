import { useState } from 'react'
import MyContext from './MyContext'
import ChildComponent from './ChildComponent'


function App() {
  const [user, setUser] = useState({ name : 'John Wick', age: 43})
  

  return (
    <>
    <MyContext.Provider value={{user, setUser}}>
      <ChildComponent />
    </MyContext.Provider>
      
    </>
  )
}

export default App
