import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/CountDown.css'

const CountDown = () => {
  const [Count,setCount] = useState(0);

  const handleadd= () => {
    setCount(Count+1);
  }
  const handldelete = () => {
    if(Count <= 0) {
      alert("No more deletion possible");
    }
    setCount(Count-1);
  }
    return (
       <div className='container'>
        <Card style={{ width: '18rem', height:'15rem',background:'#a78bfa'}}>
      <Card.Body>
      <div className='display'>
        <Card.Title>CountDown</Card.Title>
        {Count}
      </div>
        <div className="button">
        <Button onClick={handleadd}>+</Button>
        <Button onClick={handldelete}>-</Button>
        </div>
      </Card.Body>
    </Card>
       </div>
    )
}

export default CountDown
