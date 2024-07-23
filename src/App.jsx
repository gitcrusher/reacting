import React, { useState } from 'react'

function App() {
  const [val,setVal] = useState({name: "haresh", age: 24});
  return (
    <div>
    <button onClick={()=>{setVal({...val,gender: "male"});
  console.log(val)}}>click</button>
    </div>
  )
}

export default App