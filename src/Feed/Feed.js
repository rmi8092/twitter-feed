import './Feed.css'
import TweetForm from '../TweetForm/TweetForm';

const Feed = () => {
  return (
    <div>
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetForm/>
    </div>
  )
}

export default Feed;