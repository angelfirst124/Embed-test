import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Card from 'app/components/card'

const ColorBoardSec: React.FC = () => {
  return (
    <div className='dashboard__color__board-section'>
      <h2>
        The Embed-to-Earn Model
      </h2>
      <div className='dashboard__diagram'>
        <Card
          color={"#D665FC"}
          title={"#1 Match"}
          content={"Join Embed and match with your favourite brands"}
        />
        <FaArrowRight className='right-arrow'/>
        <Card
          color={"#5D5CCE"}
          title={"#2 Influence"}
          content={"Impact your favorite brand and build a community arount it"}
        />
         <FaArrowRight className='right-arrow' />
        <Card
          color={"#1B86CE"}
          title={"#3 Earn"}
          content={"Grow your audience and earn rewards"}
        />
      </div>
    </div>
  )
}

export default ColorBoardSec