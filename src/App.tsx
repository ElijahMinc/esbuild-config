import React, { useState } from 'react'
//@ts-ignore
import Logo from './assets/crush.png'

import './second.css';

export const App = () => {
   const [count, setCount] = useState(0)

   const throwErrorHandle = () => {
      setCount(prev => prev + 1)
      throw new Error('Error')
   }

   return (
      <div>
         <img src={Logo} />
         <button onClick={throwErrorHandle}>Click</button>
         <h1>{count}</h1>
      </div>
      )
}