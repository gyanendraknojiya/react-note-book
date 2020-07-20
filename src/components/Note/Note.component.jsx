import React from "react";

import "./Note.styles.css";

const NoteToDisplay = ({title, content, id, onclick}) => {

  return (
<div className='col-md-4'>
    <div className="NoteToDisplay mx-5">
      <h3 className="NoteTitle">{title}</h3>
      <hr/>
      <p className="NoteContent">{content}</p>
      <button onClick={()=>onclick(id)} className='btn btn-warning btn-sm' >Remove</button>
    </div>
    </div>
  );
};

export default NoteToDisplay;
