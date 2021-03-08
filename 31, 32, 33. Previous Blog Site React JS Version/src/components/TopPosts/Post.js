import "../../css/TopPosts.css";
<section>
  <p class="post-section-title">Recommendations</p>
  <div class="post-section">
    <div class="post-block">
      <p class="time-pill pill-post-block prevent-light">20 min</p>
      <div class="post-block-details">
        <div class="post-block-avatar"></div>
        <p class="author">Andy Wilson</p>
        <p class="title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          nulla!
        </p>
        <p class="extra-info">53K views - 3 weeks ago</p>
      </div>
    </div>
    <div class="post-block">
      <p class="time-pill pill-post-block prevent-light">19 min</p>
      <div class="post-block-details">
        <div class="post-block-avatar"></div>
        <p class="author">Andy Wilson</p>
        <p class="title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          nulla!
        </p>
        <p class="extra-info">53K views - 3 weeks ago</p>
      </div>
    </div>
    <div class="post-block">
      <p class="time-pill pill-post-block prevent-light">60 min</p>
      <div class="post-block-details">
        <div class="post-block-avatar"></div>
        <p class="author">Andy Wilson</p>
        <p class="title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          nulla!
        </p>
        <p class="extra-info">53K views - 3 weeks ago</p>
      </div>
    </div>
    <div class="post-block">
      <p class="time-pill pill-post-block prevent-light">100 min</p>
      <div class="post-block-details">
        <div class="post-block-avatar"></div>
        <p class="author">Andy Wilson</p>
        <p class="title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          nulla!
        </p>
        <p class="extra-info">53K views - 3 weeks ago</p>
      </div>
    </div>
  </div>
</section>;

const Post = (props) => {
  return (
    <div className="top-post">
      <p className="top-post-title prevent-light">{props.title}</p>
      <div className="top-post-details">
        <div className="top-post-avatar"></div>
        <div className="top-post-author-details">
          <p className="top-post-author prevent-light">{props.author}</p>
          <p className="prevent-light">
            {props.views} views - {props.time} ago
          </p>
        </div>
      </div>
      <p className="time-pill pill-top-post-block prevent-light">
        {props.readingTime}
      </p>
    </div>
  );
};

export default Post;
