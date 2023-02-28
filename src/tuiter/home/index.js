import React from "react";
import tuitsArray from "./tuits.json";
import TuitSummaryItem from "./tuit-summary-item";
import "./index.css";

const HomeComponent = () => {
  return (
    <div className="wd-posts">
      {tuitsArray.map((tuit) => (
        <TuitSummaryItem key={tuit._id} tuit={tuit} />
      ))}
    </div>
  );
};

export default HomeComponent;