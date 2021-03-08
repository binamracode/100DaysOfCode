import React from "react";
import "../../css/PostBlocks.css";

const Post = (props) => {
  return (
    <div className="post-block">
      <p className="time-pill pill-post-block prevent-light">
        {props.readingTime}
      </p>
      <div className="post-block-details">
        <div className="post-block-avatar"></div>
        <p className="author">{props.author}</p>
        <p className="title">{props.title}</p>
        <p className="extra-info">
          {props.views} views - {props.time} ago
        </p>
      </div>
    </div>
  );
};

export default Post;
