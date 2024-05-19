import React from 'react'
import Image from 'next/image'

function CardCategory({ image, title, description }:{image:any,title:any,description:any}) {
    return (
      <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-4">
        <Image height ={1000} width={1000} className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
      </div>
      </>
    )
  }
  

export default CardCategory