import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './sticky-note/header';
//import Footer from './sticky-note/footer';
import Note from './sticky-note/note';
import Createarea from './sticky-note/createArea.js';



function App() {

const [newNote,setNewNode]=useState([]);


function addNote(note){
setNewNode( prev => {
return [...prev,note]
} )
}
function delNote(idName){
  setNewNode( prev=>{
   return newNote.filter((newNote,index)=>{
     return index!==idName
   }) 
  })  
  
}

  return (
    <div className="App">
      <Header />
      <Createarea mainList={addNote} />
       { newNote.map((note,index)=> {
          return <Note remove={delNote}   key={index} id={index} title={note.title} content={note.content} />
        })}    
{/* 
      <Footer />       */}
    </div>
  );
}

export default App;
