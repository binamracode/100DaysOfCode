import React from "react";
import Post from "./Post";
import "../../css/PostBlocks.css";

const PostBlocks = () => {
  return (
    <section>
      <p className="post-section-title">Recommendations</p>
      <div className="post-section">
        <Post
          readingTime="20 min"
          author="Andy Wilson"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, nulla!"
          views="53k"
          time="3 weeks"
        />

        <Post
          readingTime="20 min"
          author="Andy Wilson"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, nulla!"
          views="53k"
          time="3 weeks"
        />

        <Post
          readingTime="20 min"
          author="Andy Wilson"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, nulla!"
          views="53k"
          time="3 weeks"
        />

        <Post
          readingTime="20 min"
          author="Andy Wilson"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, nulla!"
          views="53k"
          time="3 weeks"
        />
      </div>
    </section>
  );
};

export default PostBlocks;
