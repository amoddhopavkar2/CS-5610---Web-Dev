import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateTuitThunk } from "../../services/tuits-thunks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faThumbsDown,
} from "@fortawesome/free-regular-svg-icons";
import {
  faRetweet,
  faArrowUpFromBracket,
  faHeart as faSolidHeart,
  faThumbsDown as faSolidThumbsDown,
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
    <div className="wd-tuiter-tuit-stats-container">
      <div className="wd-tuiter-tuit-icon-container">
        <p className="wd-tuiter-tuit-icon">
          <a href="#" className="wd-link">
            <FontAwesomeIcon icon={faComment} />
            <p className="wd-numbers">{tuit.replies}</p>
          </a>
        </p>
      </div>

      <div className="wd-tuiter-tuit-icon-container">
        <p className="wd-tuiter-tuit-icon">
          <a href="#" className="wd-link">
            <FontAwesomeIcon icon={faRetweet} />
            <p className="wd-numbers">{tuit.retuits}</p>
          </a>
        </p>
      </div>

      <div className="wd-tuiter-tuit-icon-container">
        <p className="wd-tuiter-tuit-icon">
          <a href="#" className="wd-link">
            <FontAwesomeIcon icon={faHeart} />
            <p className="wd-numbers">{tuit.likes}</p>
          </a>
        </p>
      </div>

      <div className="wd-tuiter-tuit-icon-container">
        <p onClick={toggleLike} className="wd-tuiter-tuit-icon">
          <a href="#" className="wd-link">
            {tuit.liked && (
              <span class="wd-red">
                <FontAwesomeIcon icon={faSolidHeart} />
              </span>
            )}
            {!tuit.liked && <FontAwesomeIcon icon={faHeart} />}
            &nbsp;
            {tuit.likes}
          </a>
        </p>
      </div>

      <div className="wd-tuiter-tuit-icon-container">
        <p onClick={toggleDislike} className="wd-tuiter-tuit-icon">
          <a href="#" className="wd-link">
            {tuit.disliked && <FontAwesomeIcon icon={faSolidThumbsDown} />}
            {!tuit.disliked && <FontAwesomeIcon icon={faThumbsDown} />}
            &nbsp;
            {tuit.dislikes}
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
