import React from 'react'
import { IoIosReturnRight } from "react-icons/io";  
import { NavLink } from 'react-router-dom'

const Button = ({elem}) => {
  return (
    <div className='w-[50%] flex items-center'>
        <NavLink className='rounded-full px-3 py-1 flex gap-2 items-center bg-white text-black text-sm'>
            {elem} 
            <IoIosReturnRight/>
        </NavLink>
    </div>
  )
}

export default Button
