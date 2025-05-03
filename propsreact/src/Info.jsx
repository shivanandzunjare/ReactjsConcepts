import React from 'react'
import UserInfo from './UserInfo'

function Info() {
    const name = "John Wick";
    const age = 43;
    const dob = "1881-05-03"
  return (
    <div>
        <UserInfo name={name} age ={age} dob ={dob} />
      
    </div>
  )
}

export default Info
