import React from 'react'

export default function ImageSlider( {imagesUrl} ) {
  return (
    <div className='w-full h-[500px]'>
      <button className="">prev</button>
      {
        imagesUrl?.map((imageUrl , index) => <img src={imageUrl} alt="" className={`w-full h-full duration-700 bg-red-500`} key={index}/>)
      }
      <button className="">next</button>
    </div>
  )
}
