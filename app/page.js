import React from 'react';
import { imagesUrl } from './__components/ImagesUrl'
import ImageSlider from './__components/ImageSlider';

export default function page() {
  return (
    <div className=''>
      <ImageSlider imagesUrl={imagesUrl} />
    </div>
  )
}
