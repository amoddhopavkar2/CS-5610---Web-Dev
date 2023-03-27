import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateTuitThunk } from "../../services/tuits-thunks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faRetweet,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const toggleLike = () => {
    tuit.liked === false
      ? dispatch(
          updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1,
            liked: true,
          })
        )
      : dispatch(
          updateTuitThunk({
            ...tuit,
            likes: tuit.likes - 1,
            liked: false,
          })
        );
  };

  const toggleDislike = () => {
    tuit.disliked === false
      ? dispatch(
          updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes + 1,
            disliked: true,
          })
        )
      : dispatch(
          updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes - 1,
            disliked: false,
          })
        );
  };

  return (
    <div className="wd-G_container">
      <div className="wd-post-info">
        <p className="wd-icons">
          <a href="#" className="wd-link">
            <FontAwesomeIcon icon={faComment} />
            <p className="wd-numbers">{tuit.replies}</p>
          </a>
        </p>
      </div>
      <div className="wd-post-info">
        <p className="wd-icons">
          <a href="#" className="wd-link">
            <FontAwesomeIcon icon={faRetweet} />
            <p className="wd-numbers">{tuit.retuits}</p>
          </a>
        </p>
      </div>
      <div className="wd-post-info">
        <p onClick={toggleLike} className="wd-icons">
          {tuit.liked && <FontAwesomeIcon icon={faHeart} />}
          {!tuit.liked && (
            <FontAwesomeIcon icon={faHeart} style={{ color: "ff0000" }} />
          )}
          &nbsp;
          {tuit.likes}
        </p>
      </div>
      <div className="wd-post-info">
        <p className="wd-icons">
          <a href="#" className="wd-link">
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </a>
        </p>
      </div>
    </div>
  );
};
export default TuitStats;
