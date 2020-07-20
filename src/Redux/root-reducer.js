import { combineReducers } from "redux";

import UserReducer from "./User/user.reducer";
import NoteReducer from './Note/note.reducer'

export default combineReducers({
  user: UserReducer,
  Notes: NoteReducer
});

