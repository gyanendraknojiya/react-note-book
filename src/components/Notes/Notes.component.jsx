import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import uniqid from "uniqid";

import { UserSelector } from "../../Redux/User/User.selector";
import { NoteSelector } from "../../Redux/Note/Note.selector";
import {
  AddNewNote,
  DeleteNote,
  RemoveAllNote,
} from "../../Redux/Note/note.action";
import { LogoutCurrentUser } from "../../Redux/User/user.action";

import AddNote from "../AddNote/AddNote.component";
import NoteToDisplay from "../Note/Note.component";
import "./Notes.styles.css";

const Notes = ({
  currentUser,
  setAllNotes,
  allNotes,
  NoteToBeDelete,
  RemoveCurrentUser,
}) => {
  const takeNote = (e) => {
    e.preventDefault();
    const NoteToSave = {
      id: uniqid(),
      title: e.target[0].value,
      content: e.target[1].value,
    };
    setAllNotes(NoteToSave);
    e.target[0].value = "";
    e.target[1].value = "";
  };

  const removeNote = (noteID) => {
    console.log(noteID);
    NoteToBeDelete(noteID);
  };
  return (
<div>
<div className="notes">
<div className='inner' >
      {currentUser ? (
        <div className="header">
          <span className="User-Name">Hello! {currentUser}</span>{" "}
          <span
            className=" btn btn-danger btn-sm float-right m-2 mr-3"
            onClick={RemoveCurrentUser}
          >
            LogOut
          </span>
        </div>
      ) : null}
      <AddNote onsubmit={takeNote} />
      <div className="row text-center">
        {allNotes.length > 0
          ? allNotes.reverse().map((item) => (
              <NoteToDisplay
                key={item.id}
                title={item.title}
                content={item.content}
                id={item.id}
                onclick={removeNote}
              />
            ))
          : null}
      </div>
    
    </div>
</div>
    <footer>
        &#9400; Copyright: 2020: All Rights Reserved <br /> Made with <span>&#10084; </span> 
        By{" "}
        <a
          href="https://gyanendra.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gyanendra
        </a>
      </footer>
</div>
  );
};

const mapStatetoProps = createStructuredSelector({
  currentUser: UserSelector,
  allNotes: NoteSelector,
});

const mapDispatchToProps = (dispatch) => ({
  setAllNotes: (note) => dispatch(AddNewNote(note)),
  NoteToBeDelete: (note) => dispatch(DeleteNote(note)),
  RemoveCurrentUser: () => {
    dispatch(LogoutCurrentUser());
    dispatch(RemoveAllNote());
  },
});

export default connect(mapStatetoProps, mapDispatchToProps)(Notes);
