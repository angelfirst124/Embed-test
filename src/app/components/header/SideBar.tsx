import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimesCircle } from 'react-icons/fa'
import LinkIcons from 'app/components/links'
import { ISideBar } from 'app/@core/interface'
import whiteLogoUrl from 'assets/images/embed_logo_white.svg'

const SideBar: React.FC<ISideBar> = (props:ISideBar) => {
  const {isOpen, handleClick} = props
  return (
    <div 
        className={`header-nav__wrapper ${isOpen && 'header-nav__opened'}`}
      >
      <div className='header-side__nav'>
        <img src={whiteLogoUrl} className='white-logo' alt='logo white' />
        <FaTimesCircle
          className="header-trigger"
          onClick={handleClick}
        />
      </div>
      <ul>
        <li> <Link to="/" className="link-item">Home</Link> </li>
        <li> <Link to="/earn" className="link-item">Earn</Link> </li>
        <li> <Link to="/promote" className="link-item">Promote</Link> </li>
        <li> <Link to="/waitlist" className="link-item">Join Waitlist</Link> </li>
        <li> <LinkIcons /></li>
      </ul>
    </div>
  )
}

export default SideBar
