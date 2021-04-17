import './Feed.css'
import TweetForm from '../TweetForm/TweetForm';
import Tweet from '../Tweet/Tweet';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetForm/>
      <Tweet/>
    </div>
  )
}

export default Feed;