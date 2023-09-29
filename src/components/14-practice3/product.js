import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Product = (props) => {
    const{image,title,desc,price}=props
  return (
    <Card style={{ width: '17.5rem', margin:"10px", height:"35rem" ,backgroundColor:"white"}}>
    <Card.Img variant="top" src={require(`./images/${image}`)} />
    <Card.Body className='text-center d-flex flex-column justify-content-between align-items-center '>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {desc}
      </Card.Text>
      <Card.Subtitle className='fs-5 text-primary' >
          {price}$
      </Card.Subtitle>
      <Button variant="warning">Add to cart</Button>
    </Card.Body>
  </Card>
  )
}

export default Product