import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'

function Product({product}){
  return(
    <Card className='my-3'>
      <Card.Img src={product.image} variant='top'/>
      <Card.Body>
        <Card.Text as='div'>
          <strong className='text-overflow-ellipsis white-space-nowrap overflow-hidden'>{product.name}</strong>
        </Card.Text>
        <Card.Text as='div'>
          <Rating value={product.rating} text={product.numReviews}>{product.name}</Rating>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product;