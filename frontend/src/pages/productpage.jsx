import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './productpage.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';

const ProductPage = () => {
  const {id} = useParams()
 const [product, setProduct] = useState({})
 const dispatch = useDispatch();

 useEffect(()=>{
  axios
    .get(`/api/v1/products/${id}`)
    .then((res)=> setProduct(res.data))
    .catch((err)=>console.log(err.message))
 })

 const addToCartHandler = (item)=>{
  dispatch(addItem(item));
 }

  return (
    <div className="container my-5">
      <div className="row">
      <span className='d-flex justify-content-end'><Link to='/' ><button className='btn btn-danger mb-2'>Back</button></Link></span>
      <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="product-detail col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>Brand: {product.brand}</h4>
          <h4>Category: {product.category}</h4>
          <h4>Price: ${product.price}</h4>
          <h4>In Stock: {product.countInStock}</h4>
          <h4>Rating: {product.rating} ({product.numReviews} reviews)</h4>
          <button className="btn btn-success" onClick={()=>addToCartHandler(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};


export default ProductPage;