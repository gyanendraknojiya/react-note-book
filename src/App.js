import React from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'


import { setCurrentUser } from "./Redux/User/user.action";
import User from "./components/User/User.component";
import Notes from './components/Notes/Notes.component'
import { UserSelector} from './Redux/User/User.selector'

import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";

function App({setCurrentUser, currentUser}) {

const onsubmitUserName =(e)=>{
  e.preventDefault();
  const name = e.target[0].value
  setCurrentUser(name)
}

  return (
    <div className="App">
      {!currentUser?<User onsubmit={onsubmitUserName} />: null}
      {currentUser?<Notes />: null}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStatetoProps = createStructuredSelector({
  currentUser: UserSelector,
});


export default connect(mapStatetoProps, mapDispatchToProps)(App);
