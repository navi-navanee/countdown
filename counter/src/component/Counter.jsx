import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Counter = () => {
   const [count, setCount] = useState(0)
   const [start, setStart] = useState(false)

   useEffect(() => {
    if(start){
      const time = setInterval(() => {
        setCount(e => e + 1)
      }, 1000);
     return () => clearInterval(time)
    }
  }, [start])

   const reset =() =>{
    setCount(0)
   }

  return (
    <div>
        count {count}
        {
            <>
            <button onClick={() => setStart(true)}>Start</button>
            <button onClick={() => setStart(false)}>pause</button>
            <button onClick={() => reset() }>reset</button>
            </>
        }
    </div>
  )
}

export default Counter