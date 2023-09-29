import React from 'react'
import images from "./images.json"
import "./gallery.scss"

const Gallery = () => {
  return (
    <div className='gallery-image'>
    {
        images.map((img,i)=><div key={i}><img src={require(`../../assets/img/${img.name}`)}/></div>)
    }
    </div>
  )
}

export default Gallery