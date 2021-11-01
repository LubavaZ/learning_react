import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
