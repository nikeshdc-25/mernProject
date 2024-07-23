import React, { useState } from "react";
import { Col, ListGroup, Row, Image, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../slices/cartSlice";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const changeCartQty = (item, qty) => {
    dispatch(addItem({ ...item, qty }));
  };
  return (
    <>
      <ListGroup variant="flush">
        {cartItems.map((item) => (
          <ListGroup.Item key={item._id}>
            <Row>
              <Col md={2}>
                <Image src={item.image} fluid rounded alt="item image" />
              </Col>
              <Col md={4}>
                <h4>{item.name}</h4><br />
                <h5>Total: ${item.qty * item.price}</h5>
              </Col>
              <Col md={2}>
              </Col>
              <Col md={3}><b>Quantity:</b>
              <Form.Control
              as="select"
              value={item.qty}
              onChange={(e) => changeCartQty(item, Number(e.target.value))}
            >
              {[...Array(item.countInStock).keys()].map((x) => (
                <option key={x + 1}>{x + 1}</option>
              ))}
            </Form.Control>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default CartPage;
