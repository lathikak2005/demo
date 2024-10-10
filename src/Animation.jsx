import React, { useState } from 'react'
import img from './wolf.jpg'
import Img from './lathii.jpg'

const Animation = () => {

    const[image,setImage]=useState(img)
    const lathi = function(){

     setImage( Img )
   

  }




  return (
    <div onMouseEnter={lathi}>
     <img src={img} alt="imageee" />
    </div>
  )
}

export default Animation