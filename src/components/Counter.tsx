import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState<number>(0)

    let handleClick=(e:'inc'|'dec')=>{
  
      if (e==="inc") {
        setCount((prev)=>prev+1)
        
      }
      if (e==="dec" && count>0) {
        setCount((prev)=>prev-1)
        
      }
  
  
    }
  
  return (
    <div className='ml-auto'>
    <h1 className="text-3xl font-bold underline">
     counter App
     </h1>
     <h2 className='mx-2'>count {count}</h2>
     <br />
    <button onClick={()=>handleClick("inc")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
   Inc
 </button>
    <button  onClick={()=>handleClick("dec")}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
   Dec
 </button>
  </div>
  )
}

export default Counter