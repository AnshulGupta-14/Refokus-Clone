import React from 'react'
import Routing from './UTILS/Routing'
import Nav from './Nav'
import LocomotiveScroll from 'locomotive-scroll';
import Work from './Work';


const Apps = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='relative min-h-screen min-w-full bg-neutral-900 text-white font-["Satoshi_Variable"]'>
        <Nav></Nav>
        {/* <Routing></Routing> */}
        <Work></Work>
    </div>
  )
}

export default Apps;