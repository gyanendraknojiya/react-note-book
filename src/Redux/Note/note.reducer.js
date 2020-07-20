const INITIAL_STATE = {
  allnotes: [],
};

const NoteReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "ADD_NEW_NOTE") {
    return {
      ...state,
      allnotes: [...state.allnotes, { ...action.payload }],
    };
  } else if (action.type === "DELETE_A_NOTE") {
    return {
      ...state,
      allnotes: state.allnotes.filter((item) => item.id !== action.payload),
    };
  } else if (action.type === "DELETE_ALL_NOTE") {
    return {
      ...state,
      allnotes: [],
    };
  } else {
    return state;
  }
};

export default NoteReducer;
