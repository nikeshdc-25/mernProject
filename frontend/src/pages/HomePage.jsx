import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/product";


export const HomePage = () => {
const [products, setProducts] = useState([])
useEffect(()=>{
  fetch("/api/v1/products")
  .then((resp) => resp.json())
  .then((data)=>setProducts(data))
  .catch((err)=> console.log("Error while fetching api", err.message));
}, [])
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((p) => (
          <Col sm={12} md={6} lg={4} key={p.name}>
            <Product key={p.id} product={p}/>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomePage;
