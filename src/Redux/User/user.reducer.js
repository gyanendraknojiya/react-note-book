const INITIAL_STATE = {
    currentUser: null,
  };
  
  const UserReducer = (state = INITIAL_STATE, action) => {
    if (action.type === "SET_CURRENT_USER") {
      return {
        ...state,
        currentUser: action.payload,
      };
    } else if (action.type === 'LOGOUT_CURRENT_USER'){
      return {
        ...state,
        currentUser: "",
      };
    }
     else {
      return state;
    }
  };
  
  export default UserReducer;
  