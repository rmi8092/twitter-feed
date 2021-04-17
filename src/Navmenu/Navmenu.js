import './Navmenu.css';
import Navitem from '../Navitem/Navitem';
import useWindowDimensions from '../hooks/windowDimensions'
import navmenu from '../statics/navmenu';

import TwitterIcon from '@material-ui/icons/Twitter';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';

import {Button} from '@material-ui/core';

const Navmenu = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="navmenu">
      <div className="navmenu__header">
        <TwitterIcon className="navmenu__twitterIcon"/>
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