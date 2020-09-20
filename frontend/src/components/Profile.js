import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button, Table, Tab, Row, Col, ListGroup, TabContainer } from 'react-bootstrap';
import { logout, update } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';

function Profile(props) {
      const [name, setName] = useState('');
      const [password, setPassword] = useState('');
      const [email, setEmail] = useState('');
      const dispatch = useDispatch();

      const userSignin = useSelector(state => state.userSignin);
      const { userInfo } = userSignin;
      const handleLogout = () => {
            dispatch(logout());
            props.history.push("/signin");
      }
      const submitHandler = (e) => {
            e.preventDefault();
            dispatch(update({ userId: userInfo._id, email, name, password }));
      }
      const userUpdate = useSelector(state => state.userUpdate);
      const { loading, success, error } = userUpdate;

      const myOrderList = useSelector(state => state.myOrderList);
      const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;
      useEffect(() => {
        if (userInfo) {
          console.log(userInfo.name)
          setEmail(userInfo.email);
          setName(userInfo.name);
          setPassword(userInfo.password);
        }
        dispatch(listMyOrders());
        return () => {
    
        };
      }, [userInfo])
      return(
            <Container style={{padding:'5rem 0rem'}}>
                  <div style={{display:'flex', justifyContent:'space-between', margin:'1rem'}}>
                        <div><h3>User Profile</h3></div>
                  </div>
                  <div>
                        <hr/>
                        <div>
                              {loading && <h6>Loading...</h6>}
                              {error && <h6>{error}</h6>}
                              {success && <h6>Profile updated</h6>}
                        </div>
                        <div>
                              <Form onSubmit={submitHandler}>
                                    <Form.Group>
                                          <Form.Label>Name</Form.Label>
                                          <Form.Control type="name" value={name} name="name" id="name" onChange={(e) => setName(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group>
                                          <Form.Label>Email</Form.Label>
                                          <Form.Control type="email" value={email} name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group>
                                          <Form.Label>Password</Form.Label>
                                          <Form.Control type="password" value={password} name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group>
                                          <Button variant="primary" type="submit" block>UPDATE</Button>
                                    </Form.Group>
                                    <Form.Group>
                                          <Button variant="secondary" type="button" onClick={handleLogout} block>LOGOUT</Button>
                                    </Form.Group>
                              </Form>
                        </div>
                        
                  </div>
                  <div>{
                        orders ? (
                              <div>
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                          <Row>
                                                <Col sm={4}>
                                                      <ListGroup>{
                                                            orders.map(order => 
                                                                  <ListGroup.Item action eventKey={order._id}>
                                                                        {order._id}
                                                                  </ListGroup.Item>
                                                            )
                                                      }</ListGroup>
                                                </Col>
                                                <Col sm={8}>
                                                      <Tab.Content>{
                                                            orders.map(order =>
                                                                  <Tab.Pane eventKey={order._id}>
                                                                        <ListGroup variant="flush">
                                                                              <ListGroup.Item>Shipping Address: {order.shipping.address}, {order.shipping.city},
                                                                                          {order.shipping.state}, {order.shipping.postalCode}, {order.shipping.country}</ListGroup.Item>
                                                                              <ListGroup.Item>Payment Method: {order.payment.paymentMethod}</ListGroup.Item>
                                                                              <ListGroup.Item>Order Created At: {order.createdAt}</ListGroup.Item>
                                                                              <ListGroup.Item>Total Price: ${order.totalPrice}</ListGroup.Item>
                                                                              {order.orderItems.map(orderItem => 
                                                                                    <ListGroup.Item>Product: {orderItem.name}, Qty: {orderItem.qty}, Price: {orderItem.price}</ListGroup.Item>
                                                                              )}
                                                                        </ListGroup>
                                                                  </Tab.Pane>
                                                            )      
                                                      }
                                                      </Tab.Content>
                                                </Col>
                                          </Row>
                                    </Tab.Container>
                              </div>
                        ) : 'Loading'
                  }</div>
            </Container>
      )

}

export default Profile;