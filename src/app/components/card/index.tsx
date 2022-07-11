import React from 'react'
import { ICard } from 'app/@core/interface'

const Card: React.FC<ICard> = (Props: ICard) => {
  const { color, title, content } = Props

  return (
    <div
      className='diagram__card red'
      style={{backgroundColor: color}}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Card