import Button from '../Button/Button'
import NavIcon from '../NavIcon/NavIcon'
import NavItem from '../NavItem/NavItem'
import './Navbar.css'

const NavItemsList = [
  { id: 1, number: '01', value: 'About' },
  { id: 2, number: '02', value: 'Exprience' },
  { id: 3, number: '03', value: 'Works' },
  { id: 4, number: '04', value: 'Contact' },
]

const Navbar = () => {
  return (
    <div className={'navbar'}>
      <div className={'nav-icon'}>
        <a id={'nav-icon-link'} href={'/'}>
          <NavIcon />
        </a>
      </div>
      <div className={'nav-items'}>
        <div className={'nav-links'}>
          {NavItemsList.map((item) => (
            <NavItem key={item.id} number={item.number} value={item.value} />
          ))}
        </div>
        <div className={'nav-btns'}>
          <Button value={'Resume'} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
