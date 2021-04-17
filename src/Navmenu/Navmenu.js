import './Navmenu.css';
import Navitem from '../Navitem/Navitem';
import useWindowDimensions from '../hooks/windowDimensions'
import navmenu from '../statics/navmenu';

import TwitterIcon from '@material-ui/icons/Twitter';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import WbSunny from '@material-ui/icons/WbSunny';
import Brightness2 from '@material-ui/icons/Brightness2';
import {Button, Switch} from '@material-ui/core';

const Navmenu = () => {
  const { width } = useWindowDimensions();

  const switchTheme = (event) => {
    event.target.checked ? document.querySelector('body').classList.add('dark-theme') : document.querySelector('body').classList.remove('dark-theme')
  }

  return (
    <div className="navmenu">
      <div className="navmenu__header">
        <TwitterIcon className="navmenu__twitterIcon"/>
        <span className="navmenu__theme-switcher">
          <WbSunny/>
          <Switch size="small" color="primary" onChange={switchTheme}/>
          <Brightness2/>
        </span>
      </div>
      {navmenu.map(item => {
        return <Navitem active={item.active} text={item.text} Icon={item.icon} key={item.text}/>
      })}
      <div className="navmenu__button">
        <Button variant='outlined' className='navmenu__tweet'>
          {width < 1000 ? <BrushOutlinedIcon /> : 'Tweet'}
        </Button>
      </div>
    </div>
  )
}

export default Navmenu;