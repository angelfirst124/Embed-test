import React from 'react'
import ArrowButton from 'app/components/button/ArrowButton'
import EarnSectionImage from 'assets/images/earn-section-image.png'

const TextImageSec: React.FC = () => {
  return (
    <div className='dashboard__image__text-section'>
      <div className='dashboard__image__text__section-top'>
        <div className='dashboard__image__text__section-top-left'>
          <h2>Lead the change</h2>
          <p>In a decentralised world, you <b>power the brand</b>. 
            Influence the way brands will look in the metaverse 
            and <b>build a community</b> around those you love.
          </p>
          <p>
            <b>Be a part of the change and join Embed’s decentralized protocol today</b>
          </p>
          <ArrowButton 
            title={'Join waitlist'}
          />
        </div>
        <div className='dashboard__image__text__section-top-right'>
          <img src={EarnSectionImage} alt='earn section'/>
        </div>
      </div>
      <div className='dashboard__image__text__section-bottom'>
        The trademarks, logos and brand names that appear on this website are used for 
        informational or editorial purposes and are the property of their respective owners. 
        Use of these trademarks, logos and brand names does not imply any affiliation with 
        or endorsement by their owners.
      </div>
    </div>
  )
}

export default TextImageSec