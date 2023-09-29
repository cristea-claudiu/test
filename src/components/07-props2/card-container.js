import React from 'react'
import Product from './product'

const CardContainer = () => {
  return (
   <div>
     <Product name="Jhon">
    <h1>Sony Display</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <h5>price: $400</h5>
    </Product>
    <Product>
    <h1>Dell Display</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </Product> 
    <Product>
    <h1>Samsung Display</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </Product>
   </div>
  )
}

export default CardContainer