import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const TuitStats = ({ liked, likes, replies, retuits }) => {
  const [likedFlag, setLiked] = useState(liked);
  const changeLiked = () => {
    setLiked(!likedFlag);
  };

  return (
    <div className="wd-G_container">
      <div className="wd-post-info">
        <p className="wd-icons">
          <a href="#" className="wd-link">
            <i className="fa-regular fa-comment"></i>
            <p className="wd-numbers">{replies}</p>
          </a>
        </p>
      </div>
      <div className="wd-post-info">
        <p className="wd-icons">
          <a href="#" className="wd-link">
            <i className="fa-solid fa-retweet"></i>
            <p className="wd-numbers">{retuits}</p>
          </a>
        </p>
      </div>
      <div className="wd-post-info">
        <p className="wd-icons">
          <Link onClick={changeLiked} className="wd-link">
            {" "}
            <i
              className={`${
                likedFlag ? "fa-solid fa-heart red" : "fa-regular fa-heart"
              }`}
            ></i>
            <p className="wd-numbers">{likes}</p>
          </Link>
        </p>
      </div>
      <div className="wd-post-info">
        <p className="wd-icons">
          <a href="#" className="wd-link">
            <i className="fa-solid fa-share-nodes"></i>
          </a>
        </p>
      </div>
    </div>
  );
};
export default TuitStats;
