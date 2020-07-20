import React from "react";
import "./User.styles.css";

const User = (props) => {
  return (
    <div className="userBack">
      <div className="user">
        <div className="userBox">
          <h2>Enter Your Name</h2>
          <form className="form-group" onSubmit={props.onsubmit}>
            <input className="form-control" type="text" name="name" />
            <button className="btn btn-outline-primary mt-5" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
