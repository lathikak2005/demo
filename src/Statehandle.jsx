

import React from 'react'
import Img from './wolf.jpg'
import './Statehandle.css';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
const Statehandle = () => {

  function message(){
     open('https://www.youtube.com/watch?v=t8OZPJfpcTM')
  }

  


  return (
    <div className="icon">

     <center >
        <button onMouseEnter={message}>
         icons
          
        </button>
        </center>

        </div>
  )
}


export default Statehandle
