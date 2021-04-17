import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const navmenu = [
  {
    text: 'Home',
    icon: HomeIcon,
    active: true
  },
  {
    text: 'Explore',
    icon: SearchIcon,
    active: false
  },
  {
    text: 'Notifications',
    icon: NotificationsNoneIcon,
    active: false
  },
  {
    text: 'Messages',
    icon: MailOutlineIcon,
    active: false
  },
  {
    text: 'Bookmarks',
    icon: BookmarkBorderIcon,
    active: false
  },
  {
    text: 'Lists',
    icon: ListAltIcon,
    active: false
  },
  {
    text: 'Profile',
    icon: PermIdentityIcon,
    active: false
  },
  {
    text: 'More',
    icon: MoreHorizIcon,
    active: false
  }
];

export default navmenu;