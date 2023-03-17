const TweetSummaryItem = ({
  tweet = {
    _id: 123,
    profileName: "Elon Musk",
    handleName: "@elonMusk",
    date: "2h",
    content: "Falcon in the winter, soldiers!",
    profileImg: "../images/elon.png",
    postImg: "../images/spacex.jpg",
    postImgContentTitle: "SpaceX releases the FALCON 2023",
    postImgContent: "SpaceX release enjoy",
  },
}) => {
  let imageContentHide = false;
  if (tweet.postImgContentTitle == "") {
    imageContentHide = true;
  }
  console.log(tweet.profileImg);
};

export default TweetSummaryItem;
