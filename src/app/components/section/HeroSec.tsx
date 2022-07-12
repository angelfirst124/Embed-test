import React from 'react'
import ArrowButton from 'app/components/button/ArrowButton'
import heroImage from 'assets/images/hero_image.gif'
import whiteLogoUrl from 'assets/images/embed_logo_white.svg'
import TitleBar from 'assets/images/title_bar.svg'

const HeroSec: React.FC = () => {
	
  return (
		<div className='hero-container'>
			<img src={heroImage} alt='hero background'></img>
			<div className='hero-content'>
				<img src={whiteLogoUrl} className='white-logo' alt='logo white' />
				<h2>Embed empowers you to monetize your portfolio</h2>
				<img src={TitleBar} className='title-bar' alt='title bar' />
				<p>We enable NFT holders to become influencers, 
					build their audience through a turn-key solution 
					developed to monetize and transform their portfolio into a yielding asset. 
					We create passion-based communities.</p>
				<ArrowButton 
					title={'Join waitlist'}
				/>
			</div>
		</div>		
	)
}

export default HeroSec
