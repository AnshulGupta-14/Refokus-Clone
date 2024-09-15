import React from 'react'
import Stripe from './Stripe';

const Stripes = () => {
    const stripes = [
        {
            dis : "CSSDesignAwards",
            num : 48
        },
        {
            dis : "No-Code Conf 2021",
            num : 2
        },
        {
            dis : "Awwwards.",
            num : 11
        },
        {
            dis : "CSSDesignAwards",
            num : 48
        },
        {
            dis : "No-Code Conf 2021",
            num : 2
        },
        {
            dis : "Awwwards.",
            num : 11
        },
    ];
  return (
    <div className='w-full flex my-10'>
        {stripes.map((strip,index)=>{
            return(
                <Stripe index={index} item={strip} key={index}></Stripe>
            )
        })}
    </div>
  )
}

export default Stripes