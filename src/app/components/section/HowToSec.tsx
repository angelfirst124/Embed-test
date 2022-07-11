import React from 'react'
import HowToList from 'app/components/list/HowToList'
import ArrowButton from 'app/components/button/ArrowButton'
import { IHowToListProps } from 'app/@core/interface'

const HowToSec: React.FC<IHowToListProps> = ({list}: IHowToListProps) => (
  <div className='dashboard__howto-section'>
    <h2>How to earn with Embed</h2>
    <p>Three simple steps to get your started. </p>
    <div className='dashboard__howto__section-list'>
      { 
        list?.map((item, index) => (
          <HowToList
            key={index}
            {...item}
          />
        )) 
      }
    </div>
    <div className='dashboard__howto__section-bottom'>
      <h2>Be part of the alpha launch</h2>
      <ArrowButton 
        title={'Join waitlist'}
      />
    </div>
  </div>
)

export default HowToSec
