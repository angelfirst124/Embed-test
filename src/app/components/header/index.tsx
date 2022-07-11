import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import SideBar from './SideBar'
import logoUrl from 'assets/images/embed_logo_color.svg'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="header-container">
      <div>
        <Link to="/" className="header-logo">
          <img className="logo" src={logoUrl} alt="Logo" />
          <h2>embed</h2>
        </Link>
      </div>
      <div className="header-link-items">
        <Link to="/" className="link-item">Home</Link>
        <Link to="/earn" className="link-jobs">Earn</Link>
        <Link to="/promote" className="link-profile">Promote</Link>
        <Link to="/waitlist" className="link-profile">Join Waitlist</Link>
      </div>
      <FaBars
        className="header-trigger"
        onClick={handleClick}
      />
      {
        isOpen &&
        <div
          role='button'
          tabIndex={0}
          className='header-nav__overlay'
          onKeyDown={handleClick}
          onClick={handleClick}
        />
      }
      <SideBar
        isOpen={isOpen}
        handleClick={handleClick}
      />
    </div>
  )
}

export default Header
