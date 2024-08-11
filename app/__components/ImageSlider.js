"use client"
import React, { useState } from 'react'

export default function ImageSlider({ imagesUrl }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    return (
        <div className="w-full h-[100vh] flex items-center justify-center gap-6">
            <button className="">prev</button>
            <div className='w-[800px]'>
                {
                    imagesUrl?.map((imageUrl, index) => <img src={imageUrl} alt="" className={`w-full duration-700 bg-red-500 ${activeImageIndex !== index && "hidden"}`} key={index} />)
                }
            </div>
            <button className="">next</button>
        </div>
    )
}
