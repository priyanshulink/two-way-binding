import React, { useState} from 'react'

const App = () => {
  const [num, setnum] = useState('')
  const [allvalue, setallvalue] = useState(['harsh'])

  const submitHandler=(e)=>{
     e.preventDefault();
    const newallvalue = [...allvalue]//destructuring of array
   
    // console.log('current inputs:', newallvalue)
    newallvalue.push(num)
    
    setallvalue(newallvalue) 
    // or best way is 
    // setallvalue([...allvalue,num])
    setnum('')
  }
  return (
  <div className='h-screen  bg-black '>
      <div className='h-screen  bg-gray-900 flex flex-col justify-center text-center text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex justify-center gap-3.5  text-center'>
        <input type="text" 
        placeholder='Enter your name'
        value={num} 
        required
        onChange={(e)=>{
           setnum(e.target.value);
        }}
        className="h-10 my-2 rounded-2xl border border-white bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"/>
        <button className='h-10 w-33 my-2 rounded-2xl border border-white/15 bg-blue-400x text-white px-4 py-2  hover:bg-blue-600 transition '>Submit</button>
      </form>
      <div className="mt-5">
      {allvalue.map((elem, key)=>(
        <h1 className='' key={key}>{elem}</h1>
      ))}
    </div>
      </div>
      
  </div>
  )
  
}

export default App
