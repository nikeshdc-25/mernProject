import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/product";
import { useLoaderData } from "react-router-dom";


const HomePage = () => {
const products = useLoaderData();
// useEffect(()=>{
//   fetch("/api/v1/products")
//   .then((resp) => resp.json())
//   .then((data)=>setProducts(data))
//   .catch((err)=> console.log("Error while fetching api", err.message));
// }, [])
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((p) => (
          <Col sm={12} md={6} lg={4} key={p._id}>
            <Product key={p.id} product={p}/>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomePage;
