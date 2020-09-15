import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, ListGroup, Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';

function Placeorder (props) {
      const cart = useSelector(state => state.cart);
      const {cartItems, shipping, payment} = cart;

      const orderCreate = useSelector(state => state.orderCreate);
      const {loading, success, error, order} = orderCreate; 
      if(!shipping.address){
            props.history.push("/shipping");
      }
      if(!payment.paymentMethod){
            props.history.push("/payment");
      }
      const itemsPrice = cartItems.reduce((a, c) => a+ c.price *c.qty, 0);
      const shippingPrice = itemsPrice > 100 ? 0 : 10;
      const taxPrice = 0.1025 * itemsPrice;
      const totalPrice = itemsPrice + taxPrice + shippingPrice;

      const dispatch = useDispatch();
      
      const placeOrderHandler = () => {
            dispatch(createOrder({
                  orderItems: cartItems, shipping, payment, itemsPrice, shippingPrice, taxPrice, totalPrice
            }));
      }

      useEffect(() => {
            if(success) {
                  props.history.push("/order/" + order._id);
            }      
      }, [success])
      return(
            <Container>
                  <Row>
                        <Col md={9}>
                              <hr/>
                              <Container style={{padding: '0', display:'flex'}} className="cartHeader">
                                    <h3>My Order Preview</h3>
                              </Container>
                              <hr />
                              <div>
                                    {cart.shipping.address}, {cart.shipping.city},
                                    {cart.shipping.state}, {cart.shipping.postalCode}, {cart.shipping.country}
                              </div>
                              <div>
                                    <h3>Payment</h3>
                                    <div>
                                          Payment Method: {cart.payment.paymentMethod}
                                    </div>
                              </div>
                              <Container style={{padding: '0'}}>{
                                    cartItems.length === 0 ? 
                                    <h4 className="text-center">Cart is empty</h4> 
                                    :
                                    <ListGroup variant="flush">{
                                          cartItems.map(item => 
                                                <ListGroup.Item className="cartList" style={{padding: '0', display:'flex'}} key={item.id}>
                                                      <Col style={{padding: '0'}}><Image src={item.image}  style={{ width: '9rem' }}  alt="product"rounded/></Col>
                                                      <Col>
                                                            <Link to={"/womenDetails/" + item.product} style={{color:'black'}}>{item.name}</Link>
                                                            <div style={{padding: '1rem 0'}}>Qty: {item.qty}
                                                            </div>
                        
                                                      </Col>
                                                </ListGroup.Item>      
                                          )      
                                    }</ListGroup>
                                         
                              }</Container>
                              <hr />
                        </Col>
                        <Col md={3}>
                              <Card>
                                    <Card.Body>
                                          <Card.Title>
                                                Order Total
                                          </Card.Title>
                                          <hr style={{color:'black', height:'3px'}} className="cartHr"/>
                                          <Card.Text>
                                                Items : ${itemsPrice}
                                                Shipping: ${shippingPrice}
                                                Tax: ${taxPrice}
                                                Subtotal:
                                                $ {totalPrice}
                                          </Card.Text>
                                          <Button variant="primary" onClick={placeOrderHandler} >PLACE ORDER</Button>
                                    </Card.Body>
                              </Card>
                        </Col>

                  </Row>
            </Container>
      )
}

export default Placeorder;
