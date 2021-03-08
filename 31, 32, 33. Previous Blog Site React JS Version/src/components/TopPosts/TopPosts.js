import Post from "./Post";
import "../../css/TopPosts.css";

const TopPosts = () => {
  return (
    <section className="top-posts">
      <Post
        title="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia, cupiditate magni amet atque ex quis natus delectus
                dolore. Error, mollitia?"
        author="Thomas Zane"
        views="53k"
        time="2 weeks"
        readingTime="20 min"
      ></Post>
      <Post
        title="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia, cupiditate magni amet atque ex quis natus delectus
                dolore. Error, mollitia?"
        author="Thomas Zane"
        views="53k"
        time="2 weeks"
        readingTime="20 min"
      ></Post>
    </section>
  );
};

export default TopPosts;
