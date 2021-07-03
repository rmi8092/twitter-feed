import { useState } from  'react';

import './TweetForm.css';
import Modal from '../Modal/Modal'

import {Button, Avatar} from '@material-ui/core';
import { Gif, ImageOutlined, PollOutlined, SentimentSatisfiedOutlined, EventOutlined } from '@material-ui/icons';
import ReactGiphySearchbox from "react-giphy-searchbox";
import db from '../firebase'

const TweetForm = () => {
  const [tweetText, setTweetText] = useState('')
  const [imageInputVisible, setImageInputVisible] = useState(false)
  const [tweetImage, setTweetImage] = useState('')
  const [gifModalVisible, setGifModalVisible] = useState(false)

  const toggleImageInput = () => {
    setImageInputVisible(visible => !visible)
  }

  const toggleModal = () => {
    setGifModalVisible(visible => !visible)
  }
  
  const selectGif = (item) => {
    toggleImageInput()
    setTweetImage(item.images.original.url)
    setGifModalVisible(false)
  }

  const submitTweet = (event) => {
    event.preventDefault()
    db.collection('tweets').add({
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Rafa Miranda',
      username: '@Raf_MirIb',
      verified: true,
      text: tweetText,
      image: tweetImage,
      timeStamp: Date.now()
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
              <Gif
                onClick={toggleModal}
              />
              <PollOutlined className="disabled"/>
              <SentimentSatisfiedOutlined className="disabled"/>
              <EventOutlined className="disabled"/>
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
      {gifModalVisible &&
        <Modal toggleModal={toggleModal}>
          <ReactGiphySearchbox
            apiKey="TJ74BTQUQYnfvIz2u1eWfmWVEzWYrWTG"
            onSelect={(item) => selectGif(item)}
            masonryConfig={[
              { columns: 2, imageWidth: 110, gutter: 5 },
              { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 }
            ]}
          />
        </Modal>
      }
    </div>
  )
}

export default TweetForm;