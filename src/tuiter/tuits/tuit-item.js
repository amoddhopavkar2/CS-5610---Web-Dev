import {useDispatch} from "react-redux";
import React from "react";
import TuitStats from "./tuit-stats";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    };
    return (
        <div className="wd-tuit-container">
            <div className="wd-tuit-tuit-container">
                <div className="wd-tuit-profile-image-container">
                    <img
                        className="wd-tuit-profile-image"
                        src={require(`../images/${tuit.image}`)}
                    />
                </div>

                <div className="wd-tuit-tuit-content-container">
                    <div className="wd-tuit-tuit-topbar-container">
                            <div className="wd-tuit-username-container">
                                <h4 className="wd-tuit-user-username">
                                    {tuit.userName}
                                    <i
                                        className="fas fa-check-circle wd-sky-blue"
                                        aria-hidden="true"
                                    ></i>
                                </h4>
                                <h4 className="wd-tuit-user-tuiter-handle">{tuit.handle}</h4>
                                <h4 className="wd-tuit-user-tuiter-handle">
                                    &nbsp;<span className="wd-dot">&#183;</span>&nbsp;{tuit.time}
                                </h4>
                        </div>
                        {/* TODO where should the delete icon be? */}
                        <button
                            onClick={() => deleteTuitHandler(tuit._id)}
                            className="wd-tuit-delete-tuit"
                        >
                            <i className="bi bi-x-lg float-end"></i>
                        </button>
                    </div>
                    <div className="wd-tuiter-tuit-tuit">
                        <div className="wd-tuiter-tuit-tuit-content">
                            <p>{tuit.tuit}</p>
                        </div>
                    </div>
                </div>
            </div>
            <TuitStats
                liked={tuit.liked}
                likes={tuit.likes}
                replies={tuit.replies}
                retuits={tuit.retuits}
            ></TuitStats>
        </div>
    );
};
export default TuitItem;
