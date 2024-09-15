import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

const Images = () => {
  const [Images,setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1631316626818-3933cb0a9ea9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1598107604711-21c6d4b83041?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1572816719298-4880240558a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1639443444549-a8d7b05b14b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1726182875049-a8283fed88da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1726096523685-977cb002374c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
      top: "60%",
      left: "55%",
      isActive: false,
    },
  ]);
   

  const { scrollYProgress } = useScroll()

  scrollYProgress.on("change",(data)=>{
    const imageShow = (arr)=>{
      setImages((prev)=>prev.map((item,index)=>arr.indexOf(index)===-1 ? {...item, isActive: false} : {...item, isActive: true}))
    }

    switch(Math.floor(data*100)){
      case 0:
        imageShow([])
        break;
      case 1:
        imageShow([0])
        break;
      case 2:
        imageShow([0,1])
        break;
      case 3:
        imageShow([0,1,2])
        break;
      case 4:
        imageShow([0,1,2,3])
        break;
      case 5:
        imageShow([0,1,2,3,4])
        break;
      case 6:
        imageShow([0,1,2,3,4,5])
        break;
      
    }
  })
  
  return (
    <div className="w-full h-full absolute top-0">
      {Images.map((image, index) => {
        if (image.isActive) {
          return (
            <img
              key={index}
              className="w-[30%] h-[50%] rounded-xl absolute -translate-x-[50%] -translate-y-[50%]"
              style={{ top: image.top, left: image.top }}
              src={image.url}
              alt=""
            />
          );
        }
      })}
    </div>
  )
}

export default Images
