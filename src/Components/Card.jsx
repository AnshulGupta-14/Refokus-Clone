import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({width,start,para,hover="false"}) => {
    return (
        <motion.div whileHover={{backgroundColor: hover===true && "#7443ff" , padding:"30px"}} className={`${width} p-7 bg-zinc-800 h-[40vh] rounded-2xl flex flex-col justify-between`}>
            <div>
                <div className='flex items-center justify-between'>
                    <h6 className='text-xs'>Up Next: Culture</h6>
                    <FaArrowRightLong />
                </div>
                <h1 className='text-3xl my-5'>Who we are</h1>
            </div>
            
            <div className='mt-12'>
                {
                    start && (
                        <>
                            <h1 className='text-6xl font-medium'>Start a Project</h1>
                            <button className='rounded-full px-3 py-2 border text-sm mt-2'>Contact us</button>
                        </>
                    )
                }
            </div>
            
            {
                para && (
                    <p className='text-xs text-zinc-500'>Lorem ipsum dolor sit, amet consectetur.</p>
                )
            }
        </motion.div>
    )
}

export default Card     