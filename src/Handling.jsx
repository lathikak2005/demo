/*import React, { useState } from "react"
import './Header.css'


const Header = () => {

    const [like, setLike] = useState(0)
     function increment () {
        setLike(like + 1)
     } 
     function decrement () {
        setLike(like - 1)
     }        

    return (
       <div><img src="mountains.png">
       </img><p>{like}</p>
       <button onClick={increment}>Like</button>
       <button onClick={decrement}>Dislike</button>
       </div>

    )
}

export default Header;*/



import React, { useState } from 'react'
import Img from "./wolf.jpg"
const Handling = () => {
    

    const[ like,setLike] = useState("HII ") 
    function image(){
          setLike("wellcome")

    }
    function old(){
        setLike("hi")
    }


      return ( <center> <h1>
    <div onMouseEnter={image} onMouseLeave={old}> 
        <p>{like}</p>
    </div>
    </h1>
    </center>
  )
}

export default Handling