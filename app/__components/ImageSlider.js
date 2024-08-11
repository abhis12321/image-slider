import React from 'react'

export default function ImageSlider( {imagesUrl} ) {
  return (
    <div className='w-full h-[500px]'>
      <button className="">prev</button>
      {
        imagesUrl?.map((imgeUrl , index) => <img src="" alt="" className={`w-full h-full duration-700`} key={index}/>)
      }
      <button className="">next</button>
    </div>
  )
}
