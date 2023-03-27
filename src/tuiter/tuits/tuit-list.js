import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";
import "./index.css";
import TuitItem from "./tuit-item";

const TuitList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);

  return (
    <>
      {/* Compare to code given */}
      {loading && <li className="list-group-item">Loading...</li>}
      {!loading && tuits.map((tuit) => <TuitItem key={tuit._id} tuit={tuit} />)}
    </>
  );
};

export default TuitList;
