import React from 'react'
import { GoArrowUpLeft } from "react-icons/go";
import { NavLink, useLocation, useParams } from 'react-router-dom'
import Button from './Button';

const Nav = () => {
    return(
      <div className='w-full bg-neutral-900 fixed z-[100]'>
        <div className='w-[70%] mx-auto h-[10vh] flex items-center justify-between border-b border-zinc-700'>
        <div className='w-[50%] h-full flex items-center justify-between'>
          <div className='w-[20%] h-[30%] flex items-center justify-between'>
              <img className='w-1/5' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6669a1a4bcfb20e56e7cdd97_refokus_keyvisual_purple_animation_alpha_2800x1680_00.webp" alt="" />
              <h6 className='text-md font-semibold'>Refokus</h6>
          </div>
          <NavLink to='/' className='text-sm'>Home</NavLink>
          <NavLink to='/work' className='text-sm'>Work</NavLink>
          <NavLink to='/culture' className='text-sm'>Culture</NavLink>
          <span className='w-0.5 h-5 bg-zinc-700'></span>
          <NavLink to='/news' className='text-sm'>News</NavLink>
        </div>
        <div className='w-1/3 flex justify-end items-center'>
            <Button elem={<h1>Start a Project</h1>}></Button>
        </div>
      </div>
      </div>
    )
}

export default Nav
