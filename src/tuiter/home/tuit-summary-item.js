const TuitSummaryItem = ({
  tuit = {
    _id: 123,
    profileName: "Elon Musk",
    handleName: "@elonMusk",
    date: "2h",
    content: "Falcon in the winter, soldiers!",
    profileImg: "../assets/elonmusk.jpg",
    postImg: "../assets/spacex.jpg",
    postImgContentTitle: "SpaceX releases the FALCON 2023",
    postImgContent: "SpaceX release enjoy",
  },
}) => {
  let imageContentHide = false;
  if (tuit.postImgContentTitle === "") {
    imageContentHide = true;
  }
  return (
    <div className="wd-post_container">
      <div className="wd-B__image">
        <img
          className="wd-B__profile-img"
          src={`${tuit.profileImg}`}
        />
      </div>
      <div className="wd-mid-segment-container">
        <div className="wd-C_container">
          <div className="wd-C__profile-info">
            <h4 className="wd-C__profile-name">
              {tuit.profileName}{" "}
              <i
                className="fas fa-check-circle wd-sky-blue"
                aria-hidden="true"
              ></i>
            </h4>
            <h4 className="wd-C__handle-name">&nbsp;{tuit.handleName}</h4>
            <h4 className="wd-C__handle-name">
              &nbsp;<span className="wd-dot">&#183;</span>&nbsp;{tuit.date}
            </h4>
          </div>
          <div className="wd-C__options">...</div>
        </div>
        <div className="wd-D__container">
          <div className="wd-D__text">
            <p>{tuit.content}</p>
          </div>
        </div>
        <div className="wd-E-F__container" id="image-info">
          <div className="wd-E__image">
            <img src={`${tuit.postImg}`} width="100%" />
          </div>
          <div className={imageContentHide ? "wd-hidden" : "wd-F__container"}>
            <div className="wd-F__title">{tuit.postImgContentTitle}</div>
            <div className="wd-F__text">{tuit.postImgContent}</div>
          </div>
        </div>
        <div className="wd-G_container">
          <div className="wd-post-info">
            <p className="wd-icons">
              <a href="#" className="wd-link">
                <i className="fa-regular fa-comment"></i>
                <p className="wd-numbers">123</p>
              </a>
            </p>
          </div>
          <div className="wd-post-info">
            <p className="wd-icons">
              <a href="#" className="wd-link">
                <i className="fa-solid fa-retuit"></i>
                <p className="wd-numbers">123</p>
              </a>
            </p>
          </div>
          <div className="wd-post-info">
            <p className="wd-icons">
              <a href="#" className="wd-link">
                {" "}
                <i className="fa-solid fa-heart red"></i>
                <p className="wd-numbers">123</p>
              </a>
            </p>
          </div>
          <div className="wd-post-info">
            <p className="wd-icons">
              <a href="#" className="wd-link">
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
              </a>
            </p>
          </div>
        </div>
        <div className={!tuit.isThread ? "wd-hidden" : "wd-thread"}>
          <a href="#"> show this thread</a>
        </div>
      </div>
    </div>
  );
};

export default TuitSummaryItem;
