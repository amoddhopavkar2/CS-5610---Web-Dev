import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faHeart} from "@fortawesome/free-regular-svg-icons";
import {
    faRetweet,
    faCircleCheck,
    faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const TuitSummaryItem = ({
                             tuit = {
                                 _id: 123,
                                 username: "Elon Musk",
                                 handle: "@elonMusk",
                                 timestamp: "2h",
                                 content: "Falcon in the winter, soldiers!",
                                 profilePicture: "../assets/elonmusk.jpg",
                                 previewImage: "../assets/spacex.jpg",
                                 previewTitle: "SpaceX releases the FALCON 2023",
                                 previewContent: "SpaceX release enjoy",
                                 comments: "595",
                                 retuits: "1,168",
                                 likes: "11.1K",
                             },
                         }) => {
    let imageContentHide = false;
    if (tuit.previewTitle === "") {
        imageContentHide = true;
    }
    return (
        <div className="wd-tuit-container">
            <div className="wd-profile-pic-container">
                <img className="wd-profile-pic-rounded" src={`${tuit.profilePicture}`}/>
            </div>
            <div className="wd-tuit-content-container">
                <div className="wd-tuiter-user-handle-container">
                    <div className="wd-tuiter-user-handle">
                        <h4 className="wd-tuiter-username">
                            {tuit.username}{" "}
                            <span className="wd-tuiter-blue"><FontAwesomeIcon icon={faCircleCheck}/></span>
                        </h4>
                        <h4 className="wd-tuiter-handle">&nbsp;{tuit.handle}</h4>
                        <h4 className="wd-tuiter-handle">
                            &nbsp;<span className="wd-dot">&#183;</span>&nbsp;{tuit.timestamp}
                        </h4>
                    </div>
                    <div className="wd-more-options">...</div>
                </div>
                <div className="wd-tuit-tuit-container">
                    <div className="wd-tuit-tuit">
                        <p>{tuit.content}</p>
                    </div>
                </div>
                <div className="wd-tuit-preview-container" id="image-info">
                    <div className="wd-tuit-preview-image">
                        <img src={`${tuit.previewImage}`} width="100%"/>
                    </div>
                    <div
                        className={
                            imageContentHide ? "wd-is-hidden" : "wd-tuit-preview-content"
                        }
                    >
                        <div className="wd-tuit-preview-content-title">
                            {tuit.previewTitle}
                        </div>
                        <div className="wd-tuit-preview-content-content">
                            {tuit.previewContent}
                        </div>
                    </div>
                </div>
                <div className="wd-tuit-buttons-container">
                    <div className="wd-tuit-buttons">
                        <p className="wd-icons">
                            <a href="#" className="wd-light-gray">
                                <FontAwesomeIcon icon={faComment}/>
                                <p className="wd-padding-12">{tuit.comments}</p>
                            </a>
                        </p>
                    </div>
                    <div className="wd-tuit-buttons">
                        <p className="wd-icons">
                            <a href="#" className="wd-light-gray">
                                <FontAwesomeIcon icon={faRetweet}/>
                                <p className="wd-padding-12">{tuit.retuits}</p>
                            </a>
                        </p>
                    </div>
                    <div className="wd-tuit-buttons">
                        <div className="wd-icons">
                            <a href="#" className="wd-light-gray">
                                <FontAwesomeIcon icon={faHeart}/>
                                <p className="wd-padding-12">{tuit.likes}</p>
                            </a>
                        </div>
                    </div>
                    <div className="wd-tuit-buttons">
                        <p className="wd-icons">
                            <a href="#" className="wd-light-gray">
                                <FontAwesomeIcon icon={faArrowUpFromBracket}/>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={!tuit.isThread ? "wd-is-hidden" : "wd-tuiter-blue"}>
                    <a href="#"> show this thread</a>
                </div>
            </div>
        </div>
    );
};

export default TuitSummaryItem;
