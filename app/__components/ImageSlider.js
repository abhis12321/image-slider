"use client"
import React, { useState } from 'react'

export default function ImageSlider({ imagesUrl }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    return (
        <div className="w-full h-[100vh] flex items-center justify-center gap-6 text-white font-bold font-mono">
            <button className="absolute top-[50%] left-[10vw] hover:text-red-600 drop-shadow-[0_0_5px_red] hover:drop-shadow-[0_0_5px_yellow]" onClick={() => setActiveImageIndex(prev => (prev + imagesUrl.length - 1) % imagesUrl.length)}>&lt;-prev</button>
            {
                imagesUrl?.map((imageUrl, index) => <img src={imageUrl} alt="" className={`w-[100%] duration-700 delay-700 bg-red-500 ${activeImageIndex !== index && "hidden"}`} key={index} />)
            }
            <button className="absolute top-[50%] right-[10vw] hover:text-red-600 drop-shadow-[0_0_5px_red] hover:drop-shadow-[0_0_5px_yellow]" onClick={() => setActiveImageIndex(prev => (prev + 1) % imagesUrl.length)}>next-&gt;</button>
        </div>
    )
}
