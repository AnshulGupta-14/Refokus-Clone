import React from 'react'
import Product from './Product'

const Products = () => {
    const data = [
        {
            logo : "Arqitel",
            loop : 1,
            live : true,
            case : false,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1631316626818-3933cb0a9ea9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        },
        {
            logo : "TTR",
            loop : 1,
            live : true,
            case : false,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1598107604711-21c6d4b83041?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        },
        {
            logo : "YIR 2022",
            live : true,
            case : false,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1572816719298-4880240558a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        },
        {
            logo : "Yahoo!",
            live : true,
            case : true,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1639443444549-a8d7b05b14b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        },
        {
            logo : "Rainfall",
            live : true,
            case : true,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1726182875049-a8283fed88da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        },
        {
            logo : "Jungle",
            live : true,
            case : true,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1726096523685-977cb002374c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        },
        {
            logo : "Silvr",
            live : true,
            case : true,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1631316626818-3933cb0a9ea9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",

        },
        {
            logo : "Remind",
            live : true,
            case : true,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1598107604711-21c6d4b83041?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        },
        {
            logo : "Summon",
            live : true,
            case : true,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1572816719298-4880240558a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        },
        {
            logo : "Like Magic",
            live : true,
            case : true,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1639443444549-a8d7b05b14b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        },
        {
            logo : "RocketChat",
            live : true,
            case : true,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1726182875049-a8283fed88da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        },
        {
            logo : "Haufe",
            live : true,
            case : true,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1726096523685-977cb002374c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        },
        {
            logo : "YIR 2021",
            live : true,
            case : true,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1631316626818-3933cb0a9ea9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        },
        {
            logo : "Weglot",
            live : true,
            case : true,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1598107604711-21c6d4b83041?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        },
        {
            logo : "Candid Health",
            live : true,
            case : true,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1726182875049-a8283fed88da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        },
        {
            logo : "Showcase",
            live : true,
            case : true,
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus nostrum est repellat qui aliquid numquam, a voluptate ipsa dignissimos sapiente nobis rerum ab deleniti harum debitis sit. Aut, nostrum.",
            url: "https://images.unsplash.com/photo-1726096523685-977cb002374c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        },
    ];

  return (
    <div className='w-full mt-32'>
        {data.map((product,index)=>{
            return <Product key={index} logo={product.logo} live={product.live} cas={product.case} description={product.description} url={product.url}/>
        })}
    </div>
  )
}

export default Products
