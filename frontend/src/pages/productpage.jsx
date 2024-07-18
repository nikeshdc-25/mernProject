import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ProductPage = () => {
 const [product, setProduct] = useState({})
 useEffect(()=>{
  axios
    .get("/api/v1/products/6684e901ad7d3c1a95d6113e")
    .then((res)=> setProduct(res.data))
    .catch((err)=>console.log(err.message))
 })
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>Brand: {product.brand}</h4>
          <h4>Category: {product.category}</h4>
          <h4>Price: ${product.price}</h4>
          <h4>In Stock: {product.countInStock}</h4>
          <h4>Rating: {product.rating} (from {product.numReviews} reviews)</h4>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};


export default ProductPage;