import React from "react";
import { useSelector } from "react-redux";
import './index.css'
import TuitItem from "./tuit-item";

const TuitList = () => {
    const tuits = useSelector(
        (state) => state.tuits);
    return (
        <>
            {tuits.map(tuit =>
                <TuitItem key={tuit._id} tuit={tuit} />
            )}
        </>
    );
};

export default TuitList;