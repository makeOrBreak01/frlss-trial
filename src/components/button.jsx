import React from 'react'

export const Button = () => {
  
  const btnClick = () => {
    fetch('https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e/smclicks') 
    .then((response) => response.json())
    .then((json) => console.log(json))
    console.log("clicked");
  }

  return (
    <div>
        <button onClick={btnClick}>Click Me</button>
    </div>
  )
}
