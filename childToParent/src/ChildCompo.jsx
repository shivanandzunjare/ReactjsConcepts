import React from 'react'

function ChildCompo({sendDataToParent}) {
    const handleClickButton = () => {
        sendDataToParent('Hello from child');
    };
  return (
    <div>
        <button onClick={handleClickButton}> send to parent</button>
      
    </div>
  )
}

export default ChildCompo
