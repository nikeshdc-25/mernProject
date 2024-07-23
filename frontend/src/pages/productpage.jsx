import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./productpage.css";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/cartSlice";
import { Form, ListGroup } from "react-bootstrap";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(1);
  const dispatch = useDispatch();
  const [qty, setQty] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`/api/v1/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const addToCartHandler = (item) => {
    dispatch(addItem(item));
    navigate('/cart');
  };

  return (
    <div className="container my-5">
      <div className="row">
        <span className="d-flex justify-content-end">
          <Link to="/">
            <button className="btn btn-danger mb-2">Back</button>
          </Link>
        </span>
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="product-detail col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>Brand: {product.brand}</h4>
          <h4>Category: {product.category}</h4>
          <h4>Price: ${product.price}</h4>
          <h4 className="d-flex">
            In Stock: {product.countInStock > 0 ?product.countInStock :<b className="mx-2" style={{ color: "red" }}>Out of Stock</b>}
          </h4>
          <h4>
            Rating: {product.rating} ({product.numReviews} reviews)
          </h4>
          <ListGroup.Item>
            <Form.Control
              as="select"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1}>{x + 1}</option>
              ))}
            </Form.Control>
          </ListGroup.Item>
          <button
            className="btn btn-success mt-2"
            disabled={product.countInStock <= 0}
            onClick={() => addToCartHandler({ ...product, qty: Number(qty)})}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
