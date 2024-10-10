import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'


const Todolist = () => {

const[todo,setTodo]=useState(" ");
const[db,setDb]=useState([]);


function dataGet(){
      
          axios.get("http://localhost:3000/posts" , {todo})
          .then((ref)=>{
            setDb(ref.data)
            alert("the message has been read")

          })
          .catch(()=>{
            alert("the message has not been read")
          })
      }





 function dataPost()
 { 
        axios.post("http://localhost:3000/posts" ,{todo} )
        //call.function
        .then(()=>{
                alert("the data has been posted")
          })
          .catch(()=>{
               alert("the data has not been posted")
          })
 }


function updateData(id,data)
{
  axios.put(`http://localhost:3000/posts/${id}`,{todo:data})
  .then(() =>{
    console.log("data updated");
    dataGet() ;
  }) 

  .catch(()=>{
    console.log("data cannot update")
  })
}



function deleteData(id,data)
{
  axios.delete(`http://localhost:3000/posts/${id}`,{todo:data})
  .then(() =>{
    console.log("data deleted");
    dataGet();
  }) 

  .catch(()=>{
    console.log("data cannot delete")
  })
}



function newData(id){
     const data = prompt('enter the new data')
     updateData(id,data);
}





console.log(db)




  return (
    
       <div> 
        <p>{todo}</p>
        
    
        <TextField id="outlined-basic" label="Todo" 
        variant="outlined"
        value={todo}
        onChange={(ref) => setTodo(ref.target.value)} />
       
       
        
      
      <br />

    

     <Button variant="contained" onClick={dataPost}>post</Button>
     <Button variant="contained" onClick={dataGet}>get</Button>
     


     

     


     <div>

     <ul>
       {
        db.map( (item) => (
          <li key={item.id} > {item.todo} <button onClick={()=> newData(item.id)}>Edit</button>
         <button onClick={()=> deleteData(item.id)}>delete</button></li>
    
        ))
       }
      </ul >
      </div>

   



     </div>


   
  )
 } 


export default Todolist