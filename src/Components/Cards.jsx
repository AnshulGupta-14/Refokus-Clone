import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <div className='w-[70%] mx-auto mt-20 flex gap-1'>
            <Card width={"basis-[35%]"} start={false} para={true}></Card>
            <Card width={"basis-[65%]"} start={true} para={false} hover={true}></Card>
        </div>
    )
}

export default Cards;
