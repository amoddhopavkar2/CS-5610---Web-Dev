import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faRetweet,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const TuitStats = ({ liked, likes, replies, retuits }) => {
  const [likedFlag, setLiked] = useState(liked);
  const changeLiked = () => {
    setLiked(!likedFlag);
  };

  return (
    <div className="wd-tuiter-tuit-stats-container">
      <div className="wd-tuiter-tuit-icon-container">
        <p className="wd-tuiter-tuit-icon">
          <a href="#" className="wd-link">
            <FontAwesomeIcon icon={faComment} />
            <p className="wd-numbers">{replies}</p>
          </a>
        </p>
      </div>
      <div className="wd-tuiter-tuit-icon-container">
        <p className="wd-tuiter-tuit-icon">
          <a href="#" className="wd-link">
            <FontAwesomeIcon icon={faRetweet} />
            <p className="wd-numbers">{retuits}</p>
          </a>
        </p>
      </div>
      <div className="wd-tuiter-tuit-icon-container">
        <p className="wd-tuiter-tuit-icon">
          <a href="#" className="wd-link">
            <FontAwesomeIcon icon={faHeart} />
            <p className="wd-numbers">{likes}</p>
          </a>
        </p>
      </div>
      <div className="wd-tuiter-tuit-icon-container">
        <p className="wd-tuiter-tuit-icon">
          <a href="#" className="wd-link">
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </a>
        </p>
      </div>
    </div>
  );
};
export default TuitStats;
