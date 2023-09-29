import React from 'react'
import "./card.scss"

const Product = (props) => {
  return (
    <div className='card'>
        {props.name}
        {props.children}
    
    </div>
  )
}

export default Product