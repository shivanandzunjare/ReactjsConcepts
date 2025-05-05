import React, { useContext } from 'react'
import MyContext from './MyContext'

function ChildComponent() {
    const {user, setuser} = useContext(MyContext);
  return (
    <div>
        <h1>Name : {user.name}</h1>
        <h1>Age : {user.age}</h1>
    
      
    </div>
  )
}

export default ChildComponent
