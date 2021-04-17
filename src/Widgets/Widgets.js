import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__search-icon"/>
        <input type="text" placeholder="Search Twitter"/>
      </div>
      <div className="widgets__widget-container">
        <h2>What's hapenning</h2>
        <TwitterTweetEmbed tweetId={'1360972653616500743'}/>
        <TwitterTimelineEmbed sourceType='profile' screenName='Rafa_MirIb' options={{height: 400}}/>
        <TwitterShareButton url={'https://https://twitter.com/javascript'} options={{text: 'I follow #JS offical account', via: 'Rafa_MirIb'}}/>
      </div>
    </div>
  )
}

export default Widgets;