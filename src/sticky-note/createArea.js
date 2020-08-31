import React, { useState } from "react";
import './Header.css';
function CreateArea(props) {
const [text,setText]= useState({
    title:"",
    content:""
})
function myChange(event){
const {name,value}=event.target;
setText(prev=>{
  return{
      ...prev,
      [name]:value  }  }) 

      
}
function handleClick(event){
props.mainList(text);
event.preventDefault();
}
  
return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={myChange} value={text.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={myChange} value={text.content} />
        <button onClick={handleClick} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
