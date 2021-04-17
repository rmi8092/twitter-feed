import './Navitem.css';

const Navitem = ({active, text, Icon}) => {
  return (
    <div className={`navmenu__item ${active && 'navmenu__item--active'}`}>
      <Icon />
      <span>{text}</span>
    </div>
  )
}

export default Navitem;