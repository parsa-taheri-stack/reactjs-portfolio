import './NavItem.css'

const NavItem = ({ number, value }) => {
  return (
    <div className={'nav-link'}>
      <span id={'nav-item-number'}>{number}.</span>{' '}
      <span id={'nav-item-value'}>{value}</span>
    </div>
  )
}

export default NavItem
