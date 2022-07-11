import React from 'react'
import { IArrowButton } from 'app/@core/interface'
import { FaLongArrowAltRight } from 'react-icons/fa'

const ArrowButton: React.FC<IArrowButton> = ({ title} : IArrowButton ) => {
    return (
        <button className='arrow-btn'>
            {title}
            <FaLongArrowAltRight />
        </button>
    )
}

export default ArrowButton
