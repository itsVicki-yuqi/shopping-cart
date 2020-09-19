import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, ListGroup, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';

function Order (props) {
      const orderDetails = useSelector(state => state.orderDetails);
      const { order, loading, error } = orderDetails;
      const dispatch = useDispatch();
      useEffect(() => {
            //console.log(props.match.params.id);
            dispatch(detailsOrder(props.match.params.id));
            return () => {

            };
      }, []);
      console.log(order);
      
      console.log(loading);

      return(
            (typeof order === "undefined") ? <div>Loading ...</div> :  
            <Container>
                  <Row>
                        <hr/>
                        <Container style={{padding: '2rem 0rem', display:'flow-root'}} className="cartHeader">
                              <div style={{paddingBottom:'2rem'}}><h3>My Order Number: {order._id}</h3></div>
                              <div>
                                    Shipping address:
                                     {order.shipping.address}, {order.shipping.city},
                                    {order.shipping.state}, {order.shipping.postalCode}, {order.shipping.country}
                              </div>
                              <div>
                                    Payment Method: {order.payment.paymentMethod}
                              </div>
                        </Container>
                        <hr />
                        
                        
                        <Container style={{padding: '0'}}>{
                              order.orderItems.length === 0 ? 
                              <h4 className="text-center">Cart is empty</h4> 
                              :
                              <ListGroup variant="flush">{
                                    order.orderItems.map(item => 
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
                  
                  
                        <Card border="light">
                              <Card.Body>
                                    <Card.Title>
                                          Order Total
                                    </Card.Title>
                                    <hr style={{color:'black', height:'3px'}} className="cartH"/>
                                    <Card.Text>
                                          <div>Items: ${order.itemsPrice}</div>
                                          <div>Shipping: ${order.shippingPrice}</div>
                                          <div>Tax: ${order.taxPrice}</div>
                                          <div>Subtotal: ${order.totalPrice}</div>
                                          
                                    </Card.Text>
                              </Card.Body>
                        </Card>
                       

                  </Row>
            </Container>
      )
}

export default Order;
