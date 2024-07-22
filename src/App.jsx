import React, { useState } from 'react'

function App() {
  const[val,setVal] = useState({name: "harsh", isBanned: false});
  return (
    <div className='p-4'>
      <h1 className='px-2 text-black'>name: {val.name}</h1>
      <h2 className='px-2'>banned : {val.isBanned.toString()}</h2>
      <button onClick={()=> setVal({...val, isBanned:!val.isBanned  })} className={`px-4 py-1 ${val.isBanned ? "bg-blue-600":"bg-red-600"} text-white text-xs rounded-full`}>Change</button>
    </div>
  )
}

export default App