import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, ListGroup, Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart (props) {
      const cart = useSelector(state => state.cart);
      const {cartItems} = cart;
      console.log(cartItems);
      const productId = props.match.params.id;
      const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
      const dispatch = useDispatch();
      const removeFromCartHandler = (productId) => {
            dispatch(removeFromCart(productId));
      }
      useEffect(() => {
            if(productId) {
                  dispatch(addToCart(productId, qty));
            }
      }, [])
      const checkoutHandler = () => {
            props.history.push("/signin?redirect=shipping");
      }
      return(
            <Container>
                  <Row>
                        <Col md={9}>
                              <hr/>
                              <Container style={{padding: '0', display:'flex'}} className="cartHeader">
                                    <h3>My Bag</h3>
                                    <h4>{cartItems.reduce((a,c) => a + c.qty, 0)} items</h4>
                              </Container>
                              <hr />
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
                                                            <div style={{padding: '1rem 0'}}>Qty: 
                                                                  <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>{
                                                                        [...Array(item.countInStock).keys()].map(x =>
                                                                        <option key={x+1} value={x+1}>{x+1}</option>      
                                                                        )
                                                                  }</select>
                                                            </div>
                                                            <Button variant="outline-danger" type="button" onClick={() => removeFromCartHandler(item.product)} size="sm">Delete</Button>
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
                                                Subtotal ({cartItems.reduce((a,c) => a + c.qty, 0)} items)
                                                :
                                                $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                                          </Card.Text>
                                          <Button variant="primary" onClick={checkoutHandler} disabled={cartItems.length===0}>Check Out</Button>
                                    </Card.Body>
                              </Card>
                        </Col>

                  </Row>
            </Container>
      )
}

export default Cart;
