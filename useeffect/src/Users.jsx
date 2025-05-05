import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Users() {
    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data));

    },[])
  return (
    <div>
        <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      
    </div>
  )
}
