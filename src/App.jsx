import { useState } from 'react'

import './App.css'
function App() {
  const [counter, setCounter] = useState(0)

  // storing styles in a variable
  const buttonsStyle = {
    padding:10,backgroundColor: 'blue',color:'white'
  }


  function handleDecrement(){
 

    if(counter > 0){
      setCounter(counter-1)
    }else{
      alert("Please Select Postive number")
    }
    // alert("Counter decremented!")
  }

  // increment handler
  function handleIncrement(){
   
    setCounter(counter+1)
    
  }

  function handleReset(){
    setCounter(0)
  }
  return (

       <>
      <h1 style={{color: 'red'}}>{counter}</h1>
      <button onClick={handleReset}  style={buttonsStyle}>Reset</button>
      <button onClick={handleDecrement}  style={buttonsStyle}>Decrement</button>
      <button onClick={handleIncrement} style={buttonsStyle}>Increment</button>
    </>
  )
}

export default App
