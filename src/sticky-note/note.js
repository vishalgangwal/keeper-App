import React from 'react';
import './Header.css';


function note(props){

function deleteNote(event){
props.remove(props.id)
}


return(<div>
<div className="note_Box">
<h1>{props.title}</h1>
<p>{props.content}</p>
  <button className="deleteButton" onClick={deleteNote}  >Delete</button>
  </div>
  </div>
);
}


export default note;