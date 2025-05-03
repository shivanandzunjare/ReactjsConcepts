import React from 'react'

function UserInfo({name , age, dob}) {
  return (
    <div>
        <h2> Name : {name}</h2>
        <p>Age : {age}</p>
        <p> Date of Birth : {dob}</p>
      
    </div>
  )
}

export default UserInfo
