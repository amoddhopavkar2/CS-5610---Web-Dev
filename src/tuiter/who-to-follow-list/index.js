import React from "react";
import WhoToFollowListItem
  from "./who-to-follow-list-item";
import { useSelector } from "react-redux";
import './index.css'

const WhoToFollowList = () => {
  const whoArray = useSelector(
    (state) => state.who);
  return (
    <ul className="list-group wd-fixed">
      <li className="list-group-item">
        <h3>Who to follow</h3>
      </li>
      {
        whoArray.map(who =>
          <WhoToFollowListItem
            key={who._id}
            who={who} />
        )
      }
    </ul>
  );
};

export default WhoToFollowList;