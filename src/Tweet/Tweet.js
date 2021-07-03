import {forwardRef} from 'react'

import './Tweet.css';
import {Avatar} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import useTimeAgo from './../hooks/useTimeAgo'

const Tweet = 
  forwardRef(({
    avatar,
    name,
    username,
    verified,
    text,
    image,
    timeStamp
  }, ref) => {
  const {dateTime, timeAgo} = useTimeAgo(timeStamp)
  
  return (
    <div className="tweet" ref={ref}>
      <div className="tweet__avatar">
        <Avatar src={avatar}></Avatar>
      </div>
      <div className="tweet__body">
        <div className="tweet__header">
          <div className="tweet__header-text">
            <h3>
              {name}
              <span className="tweet__header-special">
                {verified && <VerifiedUserIcon className="tweet__badge"/>}
                <span>{username}</span>
                <time dateTime={dateTime}> · {timeAgo}</time>
              </span>
            </h3>
          </div>
          <div className="tweet__header-description">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="tweet__footer">
          <ChatBubbleOutlineIcon fontSize="small"/>
          <RepeatIcon fontSize="small"/>
          <FavoriteBorderIcon fontSize="small"/>
          <PublishIcon fontSize="small"/>
        </div>
      </div>
    </div>
  )
})

export default Tweet;