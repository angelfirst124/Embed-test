import React from 'react'
import ArrowButton from 'app/components/button/ArrowButton'
import sectionImage from 'assets/images/section-image.png'
import whiteLogoUrl from 'assets/images/embed_logo_white.svg'

const PictureSec: React.FC = () => {	
  return (
		<div className='dashboard__picture-section'>
			<img src={sectionImage} alt='hero background'></img>
			<div className='dashboard__picture__section-content'>
				<h2>Join the waitlist</h2>				
				<ArrowButton 
					title={'Join waitlist'}
				/>
			</div>
		</div>		
	)
}

export default PictureSec
