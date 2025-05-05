import React, { useState } from 'react'
import ChildCompo from './ChildCompo';

function Parent() {
    const [mesg, setMesg] = useState('');
    const handleChildData = (data) => {
        setMesg(data);
    }
  return (
    <div>
        <div className='container'> 
        <p>Message from child: <h3> {mesg}</h3></p>
        </div>
        <ChildCompo sendDataToParent={handleChildData}/>
      
    </div>
  )
}

export default Parent
