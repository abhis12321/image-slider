"use client"
import React, { useState } from 'react'

export default function ImageSlider( {imagesUrl} ) {
  const [activeImageIndex , setActiveImageIndex] = useState(0);
  return (
    <div className='w-[800px] h-[500px]'>
      <button className="">prev</button>
      {
        imagesUrl?.map((imageUrl , index) => <img src={imageUrl} alt="" className={`w-full h-full duration-700 bg-red-500 ${activeImageIndex !== index && "hidden"}`} key={index}/>)
      }
      <button className="">next</button>
    </div>
  )
}
