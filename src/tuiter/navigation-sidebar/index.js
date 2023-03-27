import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faAsterisk,
  faEllipsis,
  faHashtag,
  faHouse,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faBookmark,
  faEnvelope,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[2] == null ? "home" : paths[2];
  return (
    <div className="list-group">
      <div className="list-group-item list-group-item-action">
        <div className="d-flex">
          <div>
            <FontAwesomeIcon icon={faTwitter} />
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
            <FontAwesomeIcon icon={faHouse} />
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
          <FontAwesomeIcon icon={faHashtag} />
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
            <FontAwesomeIcon icon={faAsterisk} />
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
          <FontAwesomeIcon icon={faBell} />
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
          <FontAwesomeIcon icon={faEnvelope} />
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
          <FontAwesomeIcon icon={faBookmark} />
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
          <FontAwesomeIcon icon={faList} />
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
          <FontAwesomeIcon icon={faUser} />
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
          <FontAwesomeIcon icon={faEllipsis} />
          <div className="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">More</div>
        </div>
      </Link>
    </div>
  );
};
export default NavigationSidebar;
