"use client"
import React, { useEffect, useState } from 'react'

export default function ImageSlider({ imagesUrl }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        const time = setTimeout(() => {
            setActiveImageIndex((activeImageIndex + 1) % imagesUrl.length)
        }, 5000);

        return () => {
            clearTimeout(time);
        }
    } , [activeImageIndex])

    return (
        <div className="w-full h-[100vh] flex items-center justify-center gap-6 text-white font-bold font-mono">
            <button className="absolute z-10 top-[50%] left-[10vw] hover:text-red-600 drop-shadow-[0_0_5px_red] hover:drop-shadow-[0_0_5px_yellow]" onClick={() => setActiveImageIndex(prev => (prev + imagesUrl.length - 1) % imagesUrl.length)}>&lt;-prev</button>
            {
                imagesUrl?.map((imageUrl, index) => <img src={imageUrl} alt="" className={`w-[100%] h-full bg-red-500 object-cover ${activeImageIndex !== index ? "hidden" : "animate-fade"}`} key={index} />)
            }
            <button className="absolute z-10 top-[50%] right-[10vw] hover:text-red-600 drop-shadow-[0_0_5px_red] hover:drop-shadow-[0_0_5px_yellow]" onClick={() => setActiveImageIndex(prev => (prev + 1) % imagesUrl.length)}>next-&gt;</button>
        </div>
    )
}
