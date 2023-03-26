import { useDispatch } from "react-redux";
import React from "react";
import TuitStats from "./tuit-stats";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = ({ tuit }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <div className="wd-tuit-container">
            <div className="wd-tuit-content-container">
                <div className="wd-B__image">
                    <img className="wd-B__profile-img" src={require(`../images/${tuit.image}`)} />
                </div>

                <div className="wd-mid-segment-container">
                    <div className="wd-C_container">
                        <div>
                            <div className="wd-C__profile-info">
                                <h4 className="wd-C__profile-name">
                                    {tuit.userName}
                                    <i className="fas fa-check-circle wd-sky-blue" aria-hidden="true"></i>
                                </h4>
                                <h4 className="wd-C__handle-name">{tuit.handle}</h4>
                                <h4 className="wd-C__handle-name">&nbsp;<span className="wd-dot">&#183;</span>&nbsp;{tuit.time}</h4>
                            </div>
                        </div>
                        {/* TODO where should the delete icon be? */}
                        <button onClick={() => deleteTuitHandler(tuit._id)} className="wd-tuit-delete">
                            <i className="bi bi-x-lg float-end"></i>
                        </button>
                    </div>
                    <div className="wd-D__container">
                        <div className="wd-D__text">
                            <p>
                                {tuit.tuit}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <TuitStats liked={tuit.liked} likes={tuit.likes} replies={tuit.replies} retuits={tuit.retuits} tuit={tuit}></TuitStats>
        </div>
    );
};
export default TuitItem;