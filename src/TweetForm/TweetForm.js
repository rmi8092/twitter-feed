import './TweetForm.css';
import {Button, Avatar} from '@material-ui/core';
import { Gif, ImageOutlined, PollOutlined, SentimentSatisfiedOutlined, EventOutlined } from '@material-ui/icons';

const TweetForm = () => {
  return (
    <div className="tweetForm">
      <form>
        <Avatar src="https://i.pravatar.cc/150?img=3"></Avatar>
        <div className="tweetForm__input">
          <input type="text" placeholder="What's happening?"></input>
          <div className="tweetForm__buttons">
            <div className="tweetForm__attached">
              <ImageOutlined/>
              <Gif/>
              <PollOutlined/>
              <SentimentSatisfiedOutlined/>
              <EventOutlined/>
            </div>
            {/*<input type="text" className="tweetForm__image" placeholder="Enter image URL"></input>*/}
            <Button className="tweetForm__button">Tweet</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TweetForm;