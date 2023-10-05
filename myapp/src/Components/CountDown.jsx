import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/CountDown.css'

const CountDown = () => {
  const [Count, setCount] = useState(0);

  const handleadd = () => {
    setCount(Count + 1);
  }
  const handledelete = () => {
    if (Count <= 0) {
      alert("Count can't be Negative");
    }
    setCount(Count - 1);
  }
  return (
    <div className='Container'>
      <Card style={{ width: '18rem', height: '15rem' }} className='Card-section'>
        <Card.Body className='display'>
            <Card.Title>CountDown</Card.Title>
            <span>Count : </span>{Count}
          <div className="button">
            <Button onClick={handleadd}>+</Button>
            <Button onClick={handledelete}>-</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CountDown
