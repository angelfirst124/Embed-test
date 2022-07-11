import React from 'react'
import {
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa'

const LinkIcons: React.FC = () => {
  return (
    <div className='footer__link-icons'>
      <FaLinkedin color='white' className='footer__link-icon' />
      <FaTelegram color='white' className='footer__link-icon' />
      <FaTwitter color='white' className='footer__link-icon' />
    </div>
  )
}

export default LinkIcons
