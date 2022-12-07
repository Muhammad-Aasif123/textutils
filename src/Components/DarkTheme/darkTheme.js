import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function DarkTheme() {

  const [mystyle,setmystyle]=useState(
    {
      color:'black',
      backgroundColor:'white'
    }
  )
const [btntext, setBtnText]=useState('Enable Dark Mode')
const toggleStyle=()=>{
  if(mystyle.color == 'black'){
    setmystyle({
      color: 'white',
      backgroundColor: 'black',
      border: '1px solid white'
    })
    setBtnText('Enable Light Mode')
  }
  else{
    setmystyle({
      color: 'black',
      backgroundColor:'white'
    })
    setBtnText('Enable Dark Mode')
  }
}


  return (
    <div className='container my-5' style={mystyle}>
    <Accordion style={mystyle}>
      <Accordion.Item eventKey="0"   style={mystyle}>
        <Accordion.Header >Accordion Item #1</Accordion.Header>
        <Accordion.Body style={mystyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={mystyle}>
        <Accordion.Header >Accordion Item #2</Accordion.Header>
        <Accordion.Body style={mystyle}> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={mystyle}>
        <Accordion.Header >Accordion Item #3</Accordion.Header>
        <Accordion.Body style={mystyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Button className='my-3' variant="primary" onClick={toggleStyle}>{btntext}</Button>
    </div>
     
  );
}

export default DarkTheme;