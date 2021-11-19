import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import classes from "./Profile.module.css";

const Profile = (props) => {
  let id = process.env.REACT_APP_GOOGLE_CLIEN_ID;
  console.log(id);
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
