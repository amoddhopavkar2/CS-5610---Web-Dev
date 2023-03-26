const TweetSummaryItem = (
    {
        tweet = {
            "_id": 123,
            "profileName": "Elon Musk",
            "handleName": "@elonMusk",
            "date": "2h",
            "content": "Falcon in the winter, soldiers!",
            "profileImg": "../images/elon.png",
            "postImg": "../images/spacex.jpg",
            "postImgContentTitle": "SpaceX releases the FALCON 2023",
            "postImgContent": "SpaceX release enjoy"
        }
    }
) => {
    let imageContentHide = false;
    if(tweet.postImgContentTitle == ""){
        imageContentHide = true;
    }
    console.log(tweet.profileImg);
    return (
        <div className="wd-post_container">
            <div className="wd-B__image">
                <img className="wd-B__profile-img" src={require(`../images/${tweet.profileImg}`)} />
            </div>
            <div className="wd-mid-segment-container">
                <div className="wd-C_container">
                    <div className="wd-C__profile-info">
                        <h4 className="wd-C__profile-name">{tweet.profileName} <i className="fas fa-check-circle wd-sky-blue" aria-hidden="true"></i></h4>
                        <h4 className="wd-C__handle-name">&nbsp;{tweet.handleName}</h4>
                        <h4 className="wd-C__handle-name">&nbsp;<span className="wd-dot">&#183;</span>&nbsp;{tweet.date}</h4>
                    </div>
                    <div className="wd-C__options">
                        ...
                    </div>
                </div>
                <div className="wd-D__container">
                    <div className="wd-D__text">
                        <p>
                            {tweet.content}
                        </p>
                    </div>
                </div>
                <div className="wd-E-F__container" id="image-info">
                    <div className="wd-E__image">
                        <img src={require(`../images/${tweet.postImg}`)} width="100%" />
                    </div>
                    <div className={imageContentHide? 'wd-hidden':'wd-F__container'}>
                        <div className="wd-F__title">
                            {tweet.postImgContentTitle}
                        </div>
                        <div className="wd-F__text">
                            {tweet.postImgContent}
                        </div>
                    </div>
                </div>
                <div className="wd-G_container">
                    <div className="wd-post-info">
                        <p className="wd-icons">
                            <a href="#" className="wd-link"><i className="fa-regular fa-comment"></i><p className="wd-numbers">123</p></a>
                        </p>
                    </div>
                    <div className="wd-post-info">
                        <p className="wd-icons">
                            <a href="#" className="wd-link"><i className="fa-solid fa-retweet"></i><p className="wd-numbers">123</p></a>
                        </p>
                    </div>
                    <div className="wd-post-info">
                        <p className="wd-icons">
                            <a href="#" className="wd-link"> <i className="fa-solid fa-heart red"></i><p className="wd-numbers">123</p></a>
                        </p>
                    </div>
                    <div className="wd-post-info">
                        <p className="wd-icons">
                            <a href="#" className="wd-link"><i className="fa-solid fa-arrow-up-from-bracket"></i></a>
                        </p>
                    </div>
                </div>
                <div className={!tweet.isThread? 'wd-hidden':'wd-thread'}>
                   <a href="#"> show this thread</a>
                </div>
            </div>
        </div>
    );
}

export default TweetSummaryItem;