import React from "react";
import { Col, ListGroup, Row, Image, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAddOrderMutation } from "../slices/orderSlice";
import { toast } from "react-toastify";
import { removeCart } from "../slices/cartSlice";

function OrderPage() {
  const { cartItems, shippingAddress, itemPrice, totalPrice, shippingCharge } =
    useSelector((state) => state.cart);
  const [addOrder, { isLoading }] = useAddOrderMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const placeOrderHandler = async () => {
    try {
      let res = await addOrder({
        orderItems: cartItems,
        shippingAddress,
        itemPrice,
        shippingCharge,
        totalPrice,
      }).unwrap();
      toast.success(res.message);
      dispatch(removeCart())
      navigate("/confirmorder/" + res.orderId);
    } catch (err) {
      toast.error(err.data.error);
    }
  };
  return (
    <Row>
      <Col md={8}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h1>Shipping</h1>
            <br /> <h3>User Details:</h3>
            <p>
              <strong>Name: </strong>
              {shippingAddress.recipient} <br />
              <strong>Phone: </strong>
              {shippingAddress.phone} <br />
              <strong>Address: </strong>
              {shippingAddress.address} <br />
              <strong>City: </strong>
              {shippingAddress.city} <br />
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} fluid rounded />
                  </Col>
                  <Col>
                    <Link to={`/product/${item._id}`}>
                      <strong>{item.name}</strong>
                    </Link>
                  </Col>
                  <Col>
                    <strong>
                      {item.qty} X ${item.price} = $
                      {(item.qty * item.price).toFixed(2)}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup>
            <ListGroup.Item>
              <h2>Order Summary</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Items</Col>
                <Col>${itemPrice}</Col>
              </Row>
              <Row>
                <Col>Shipping</Col>
                <Col>${shippingCharge}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Total</Col>
                <Col>${totalPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Button variant="dark" onClick={placeOrderHandler}>
                  Place Order
                </Button>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default OrderPage;
