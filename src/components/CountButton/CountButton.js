import {React, useState} from 'react'
import './CountButton.css'

const CountButton = (props) => {
  
  const [currentCount, setCurrentCount] = useState(0)

  const handleClick = () =>{
    setCurrentCount(currentCount + props.incrementBy)
  }

  return (
    <div>
        <div className='current-count'>{currentCount}</div>
        <button onClick={handleClick}>+{props.incrementBy}</button>
    </div>
  )
}

export default CountButton

