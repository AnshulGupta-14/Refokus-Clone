import React from 'react'

const Stripe = ({index,item}) => {
  return (
    <div className={`h-16 w-1/6 bg-neutral-950 border border-zinc-700 border-l-0 ${index===5 ? "border-r-0":""} flex items-center justify-around`}>
        <h1 className='text-xs'>{item.dis}</h1>
        <h1 className='text-xs'>{item.num}</h1>
    </div>
  )
}

export default Stripe