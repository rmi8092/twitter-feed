import {useState} from  'react';

import './TweetForm.css';
import {Button, Avatar} from '@material-ui/core';
import { Gif, ImageOutlined, PollOutlined, SentimentSatisfiedOutlined, EventOutlined } from '@material-ui/icons';
import db from '../firebase'

const TweetForm = () => {
  const [tweetText, setTweetText] = useState('')
  const [imageInputVisible, setImageInputVisible] = useState(false)
  const [tweetImage, setTweetImage] = useState('')

  const toggleImageInput = () => {
    setImageInputVisible(visible => !visible)
  }
  
  const submitTweet = (event) => {
    event.preventDefault()
    db.collection('tweets').add({
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Rafa Miranda',
      username: '@Raf_MirIb',
      verified: true,
      text: tweetText,
      image: tweetImage
    })
    setTweetText('')
    setTweetImage('')
    toggleImageInput()
  }

  return (
    <div className="tweetForm">
      <form>
        <Avatar src="https://i.pravatar.cc/150?img=3"></Avatar>
        <div className="tweetForm__input">
          <input
            value={tweetText}
            placeholder="What's happening?"
            onChange={(event) => setTweetText(event.target.value)}  
          ></input>
          {imageInputVisible &&
            <input
              value={tweetImage}
              onChange={(event) => setTweetImage(event.target.value)}
              className="tweetForm__image"
              placeholder="Enter image URL"
            ></input>
          }
          <div className="tweetForm__buttons">
            <div className="tweetForm__attached">
              <ImageOutlined
                onClick={toggleImageInput}
              />
              <Gif/>
              <PollOutlined/>
              <SentimentSatisfiedOutlined/>
              <EventOutlined/>
            </div>
            <Button
              type="submit"
              className="tweetForm__button"
              onClick={submitTweet}
            >
              Tweet
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TweetForm;