import React from 'react'
import {Card, CardFooter} from 'react-bootstrap'
import Rating from './Rating'
import './product.css';
import {Link} from 'react-router-dom'

function Product({product, addToCart}){
  return(
    <Card className='my-3 product-card'>
      <Link to={`/product/${product._id}`} title={`${product.name}`}>
      <Card.Img src={product.image} variant='top'/>
      <Card.Body>
        <Card.Text as='div'>
          <strong className='product-title'>{product.name}</strong>
        </Card.Text>
        <Card.Text as='div'>
          <Rating value={product.rating} text={product.numReviews}>{product.name}</Rating>
        </Card.Text>
        <Card.Text as="h3">${product.price} ${product.numReviews}</Card.Text>
      </Card.Body>
      </Link>
      <CardFooter>
      <button className='btn btn-success'>Add to Cart</button>
      </CardFooter>
    </Card>
  )
}

export default Product;