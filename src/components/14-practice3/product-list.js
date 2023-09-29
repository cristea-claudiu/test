import React from 'react'
import Product from './product'
import { Container,Row ,Col} from 'react-bootstrap'
import products from "./products.json"

const ProductList = () => {
  return (
    <Container>


    <Row className='g-5 mt-2'>
        {
            products.map((product)=>
        
        <Col key={product.id} sm={6} md={5} lg={4} xl={3}>    
        <Product {...product}/> 
         </Col>)}
    </Row>
    </Container>
  )
}

export default ProductList