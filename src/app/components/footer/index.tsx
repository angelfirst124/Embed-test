import React from 'react'
import { Link } from 'react-router-dom'
import LinkIcons from 'app/components/links'
import whiteLogoUrl from 'assets/images/embed_logo_white.svg'

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer__content-left">
        <Link to="/" className="footer-logo">
          <img src={whiteLogoUrl} alt="Logo" />
          <h2>embed</h2>
        </Link>
        <p>@ Embed 2022</p>
      </div>
      <div className='footer__content-right'>
        <p>
        Embed protocol is a marketing community engine solution for brands 
        and NFT holders that discovers, tokenizes, and activates communities 
        in the metaverse and web3 </p>
        <LinkIcons />
        <div className='footer-links'>
          <Link className='footer__link' to={'/'}>Legal</Link>
          <Link className='footer__link' to={'/'}>Privacy</Link>
          <Link className='footer__link' to={'/'}>Careers</Link>
          <Link className='footer__link' to={'/'}>Contact</Link>
        </div>
      </div>
      <p>@ Embed 2022</p>
    </div>
  )
}

export default Footer
