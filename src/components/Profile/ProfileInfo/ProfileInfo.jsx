import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1533664733275-8b7566eb8b4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
          alt="background-for-app"
        />
      </div>
      <div className={classes.descriptionBlock}> ava + description</div>
    </div>
  );
};

export default ProfileInfo;
