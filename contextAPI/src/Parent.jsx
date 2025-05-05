import React from 'react'
import MyContext from './MyContext'
import Child from './Child'

function Parent() {
    const value = {name : 'John Snow'};
  return (
    <MyContext.Provider value={value}>
        <Child />

    </MyContext.Provider>
  )
}

export default Parent
