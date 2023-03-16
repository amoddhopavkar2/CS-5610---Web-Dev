import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faRetweet,
  faCircleCheck,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[2] == null ? "home" : paths[2];
  return (
    <div className="list-group">
      <div className="list-group-item list-group-item-action">
        <div className="d-flex">
          <div>
            <i className="fab fa-twitter"></i>
          </div>
          <div className="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">
            Tuiter
          </div>
        </div>
      </div>
      <Link
        to="/tuiter"
        className={`list-group-item list-group-item-action ${
          active === "home" ? "active" : ""
        }`}
      >
        <div className="d-flex  ">
          <div>
            <i className=" fas fa-home"></i>
          </div>
          <div className="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">Home</div>
        </div>
      </Link>
      <Link
        to="/tuiter/explore"
        className={`list-group-item list-group-item-action ${
          active === "explore" ? "active" : ""
        }`}
      >
        <div className="d-flex align-items-center ">
          <i className="fas fa-hashtag"></i>
          <div className="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">
            Explore
          </div>
        </div>
      </Link>
      <Link
        to="/"
        className={`list-group-item list-group-item-action ${
          active === "labs" ? "active" : ""
        }`}
      >
        <div className="d-flex  ">
          <div>
            <i className="fa-solid fa-computer"></i>
          </div>
          <div className="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">Labs</div>
        </div>
      </Link>
      <Link
        className={`list-group-item list-group-item-action ${
          active === "notifications" ? "active" : ""
        }`}
      >
        <div className="d-flex align-items-center">
          <i className="fas fa-bell"></i>
          <div className="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">
            Notifications
          </div>
        </div>
      </Link>
      <Link
        className={`list-group-item list-group-item-action ${
          active === "messages" ? "active" : ""
        }`}
      >
        <div className="d-flex align-items-center ">
          <i className="fas fa-envelope"></i>
          <div className="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">
            Messages
          </div>
        </div>
      </Link>
      <Link
        className={`list-group-item list-group-item-action ${
          active === "bookmarks" ? "active" : ""
        }`}
      >
        <div className="d-flex align-items-center">
          <i className="fas fa-bookmark"></i>
          <div className="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">
            Bookmarks
          </div>
        </div>
      </Link>
      <Link
        className={`list-group-item list-group-item-action ${
          active === "lists" ? "active" : ""
        }`}
      >
        <div className="d-flex align-items-center">
          <i className="fas fa-list"></i>
          <div className="d-none  d-xl-block d-xxl-block ms-1 wd-pd-5">
            Lists
          </div>
        </div>
      </Link>
      <Link
        to="/tuiter/profile"
        className={`list-group-item list-group-item-action  ${
          active === "profile" ? "active" : ""
        }`}
      >
        <div className="d-flex align-items-center">
          <i className="fas fa-user"></i>
          <div className="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">
            Profile
          </div>
        </div>
      </Link>
      <Link
        className={`list-group-item list-group-item-action ${
          active === "more" ? "active" : ""
        }`}
      >
        <div className="d-flex align-items-center">
          <i className="fa-solid fa-ellipsis"></i>
          <div className="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">More</div>
        </div>
      </Link>
    </div>
  );
};
export default NavigationSidebar;
