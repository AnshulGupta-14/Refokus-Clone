import React, { useState } from 'react'
import Button from "./Button"

const Product = ({logo,live,description,cas,url}) => {
    const [flag, setFlag] = useState(0);
    const handelin = ()=>{
        setFlag(1);
    }
    const handelout = ()=>{
        setFlag(0);
    }
    return (
        <div className='relative w-full hover:bg-blue-800' onMouseEnter={handelin} onMouseLeave={handelout}>
            <div className='w-[70%] mx-auto h-[25vh] flex items-center justify-between py-5'>
                <div>
                    <h1 className='text-4xl font-medium'>{logo}</h1>
                </div>
                <div className='w-[35%] h-full '>
                    <p className='text-sm'>{description}</p>
                    <div className={`flex w-full pb-5 items-center mt-5 ${flag ? "opacity-1" : "opacity-0"}`}>
                        {live===true ? <Button elem={<h1>Live Website</h1>}></Button> : ""}
                        {cas===true ? <Button elem={<h1>Case Study</h1>}></Button> : ""}
                    </div>
                </div>
            </div>
            {flag === 1 ? (<div className='absolute h-[30vh] w-64 left-[35%] -top-[2.5vh] '>
                <img className='rounded-xl w-full h-full object-cover' src={url} alt="" />
            </div>):""}
        </div>
    )
}

export default Product