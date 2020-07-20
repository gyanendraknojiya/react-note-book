export const setCurrentUser = (user) => {
    return { type: "SET_CURRENT_USER", payload: user };
  };
  
  export const LogoutCurrentUser = () => {
    return { type: "LOGOUT_CURRENT_USER"};
  };
  