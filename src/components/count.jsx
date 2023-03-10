import React, {useState} from 'react'
import { Button } from './button';
import { Counter } from './counter';


const countKey = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';


export const Count = (props) => {

  const [countNumb, setCountNumb] = useState();

  const getCount = () => {
    console.log('getCount function ran')
    fetch(`https://api.countapi.xyz/get/${countKey}`) 
    .then(res => res.json())
    .then(data => {
       setCountNumb(data.value)
    })
    
  }

  const btnClick = () => {
      fetch(`https://api.countapi.xyz/hit/${countKey}`) 
      .then(res => res.json())
      .then(data => {
        setCountNumb(data.value)
    })
  }

  getCount();

  return (
    <div>
        <Button click={btnClick}/>
        <Counter data-testid="counterTest" number={countNumb}/>
        </div>
  )
}

function jestTestSumFunc(a,b) {
  return a+b;
  // a function to test my test setup
} 

jestTestSumFunc(1,2);

