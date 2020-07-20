export const AddNewNote = (note) => {
    return { type: "ADD_NEW_NOTE", payload: note };
  };
 
  export const DeleteNote = (noteID) => {
    return { type: "DELETE_A_NOTE", payload: noteID };
  };

  export const RemoveAllNote = () => {
    return { type: "DELETE_ALL_NOTE" };
  };
  