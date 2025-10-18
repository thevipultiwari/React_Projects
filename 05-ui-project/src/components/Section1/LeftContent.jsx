import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
      <div className='h-[82vh] w-1/3  flex flex-col justify-between '>
          <HeroText />
          <Arrow/>
    </div>
  )
}

export default LeftContent