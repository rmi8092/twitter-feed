import {useState, useEffect} from 'react';

import './Feed.css';
import TweetForm from '../TweetForm/TweetForm';
import Tweet from '../Tweet/Tweet';

import db from './../firebase';

const Feed = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    db.collection('tweets').onSnapshot(snapshot => (
      setTweets(snapshot.docs.map(document => document.data()))
    ))
  }, [])
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetForm/>
      {tweets.map(tweet => {
        return (
          <Tweet
            avatar={tweet.avatar}
            name={tweet.name}
            username={tweet.username}
            verified={tweet.verified}
            text={tweet.text}
            image={tweet.image}
          />
        )
      })}
    </div>
  )
}

export default Feed;