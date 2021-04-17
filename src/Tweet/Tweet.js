import './Tweet.css';
import {Avatar} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Tweet = ({name, username, verified, text, image, avatar}) => {
  return (
    <div className="tweet">
      <div className="tweet__avatar">
        <Avatar src="https://i.pravatar.cc/150?img=3"></Avatar>
      </div>
      <div className="tweet__body">
        <div className="tweet__header">
          <div className="tweet__header-text">
            <h3>Rafa Miranda {' '}
              <span className="tweet__header-special">
                <VerifiedUserIcon className="tweet__badge"/>
                <span>@Raf_MirIb</span>
              </span>
            </h3>
          </div>
          <div className="tweet__header-description">
            <p>lorem ipsum dolor sit amet, consect</p>
          </div>
        </div>
        <img src="https://media.giphy.com/media/LpkhKVwp6dpCg/giphy.gif" alt="" />
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