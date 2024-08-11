"use client"
import React, { useState } from 'react'

export default function ImageSlider({ imagesUrl }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    return (
        <div className="w-full h-[100vh] flex items-center justify-center gap-6">
            <button className="" onClick={() => setActiveImageIndex(prev => (prev + imagesUrl.length - 1) % imagesUrl.length)}>prev</button>
            {
                imagesUrl?.map((imageUrl, index) => <img src={imageUrl} alt="" className={`w-[100%] duration-700 delay-700 bg-red-500 ${activeImageIndex !== index && "hidden"}`} key={index} />)
            }
            <button className="" onClick={() => setActiveImageIndex(prev => (prev + 1) % imagesUrl.length)}>next</button>
        </div>
    )
}
