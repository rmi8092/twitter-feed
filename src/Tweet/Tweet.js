import './Tweet.css';
import {Avatar} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Tweet = ({avatar, name, username, verified, text, image}) => {
  return (
    <div className="tweet">
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
}

export default Tweet;