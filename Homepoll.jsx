import React from 'react'
import image1 from"./IMAGE1.jpg";
export const Homepoll = () => {
  return (
    <div id='pollhome' style={{backgroundImage: `url(${image1})`, backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', textAlign: 'center',
    
    color:'#ffc',
    fontSize: '34pt',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>WELCOME TO POLLING WEBSITE</div>
  )
}
