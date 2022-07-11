import React, { useEffect, useState } from 'react'
import { IHowToList } from 'app/@core/interface'

const HowToList: React.FC<IHowToList> = (props: IHowToList) => {
  const { imageName, title, list } = props
  const [imageSrc, setImageSrc] = useState()

  useEffect(() => {
    import(`assets/images/${imageName}.svg`)
    .then(image => setImageSrc(image.default))
  }, [imageName])

  return (
    <div className='howto-list'>
      {
        imageSrc && 
        <div className='howto__list-img'>
          <img
            src={imageSrc}
            alt={`${title}`}
          />
          <h2>{title}</h2>
        </div>
      }
      <ol>
      {
        list?.map((item, index) => (
          <li key={item + index}>
            {item}
          </li>
        ))
      }
      </ol>
    </div>
  )
}

export default HowToList