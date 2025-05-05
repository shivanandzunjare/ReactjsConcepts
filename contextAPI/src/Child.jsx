import React from 'react'
import MyContext from './MyContext'

function Child() {
  return (
    <div>
        <MyContext.Consumer >
            { value => (
                <div>
                    <h1> Hello, {value.name}</h1>
                </div>
                )
            }
        </MyContext.Consumer>
      
    </div>
  )
}

export default Child
