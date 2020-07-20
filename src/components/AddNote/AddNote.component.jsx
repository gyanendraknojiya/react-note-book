import React, {useState} from "react";

import "./AddNote.styles.css";

const AddNote = (props) => {
const [show, setShow] = useState("none")

const showFullForm= ()=>{
  setShow("block")
}
const HideForm=()=>{
  setShow('none')
}
  return (
    <div className="addForm">
      <form className="form-group" onSubmit={props.onsubmit}>
        <h3 className='form-heading'>Add a note here...</h3>
        <input
          text="text"
          name="title"
          className="form-control"
          placeholder="Note title*"
         onClick={showFullForm}
          required
          autoComplete="off"
        />
        <textarea
          name="content"
          id=""
          cols="30"
          rows="4"
          className="form-control mt-2"
          placeholder="Note Content*"
          style={{display: `${show}`}}
          required
        />
        <button className="btn btn-outline-success mt-3 mx-auto"  style={{display: `${show}`}} onClick={HideForm}>ADD</button>
      </form>
    </div>
  );
};

export default AddNote;
