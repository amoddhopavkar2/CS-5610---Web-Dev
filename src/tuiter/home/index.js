import tweetsArray from "./tweets.json";
import TweetSummaryItem from "./tweet-summary-item";
import "./index.css";

const HomeComponent = () => {
  return (
    <div className="wd-posts">
      {tweetsArray.map((post) => (
        <TweetSummaryItem key={post._id} tweet={post} />
      ))}
    </div>
  );
};

export default HomeComponent;
