import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Container, Image, Col, Row, Breadcrumb, ListGroup, Card, Button, Form } from 'react-bootstrap';
import { detailsProduct } from '../actions/productActions';

function WomenDetails (props) {
      const productDetails = useSelector(state => state.productDetails);
      const {product, loading, error} = productDetails;
      const dispatch = useDispatch();
      console.log(props.match.params.id);
      useEffect(() => {
            dispatch(detailsProduct(props.match.params.id));
            return () => {

            };
      }, [])
      return (
            <Container style={{padding:'0 0'}}>
                  
                  <Breadcrumb style={{padding: '1rem 0'}}>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/women">Women</Breadcrumb.Item>
                        <Breadcrumb.Item active>Product Details</Breadcrumb.Item>
                  </Breadcrumb>
                  <Row>{
                        product ? (
                              <Row>
                                    <Col md={6}> 
                                          <Image src={product.image} alt="product" fluid/>
                                    </Col>
                                    <Col md={6}>
                                          <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                      {product.name}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                      {product.rating} Stars ({product.numReviews} Reviews)
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                      Price: <b>$ {product.price}</b>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                      {product.description}
                                                </ListGroup.Item>

                                          </ListGroup>
                                          <Card>
                                                <Card.Body>
                                                      <Card.Title>Status: {product.status}</Card.Title>
                                                            <Form>
                                                                  <Form.Group controlId="exampleForm.ControlSelect1">
                                                                        <Form.Label>Qty: </Form.Label>
                                                                        <Form.Control as="select" className="mr-sm-2">
                                                                              <option>1</option>
                                                                              <option>2</option>
                                                                              <option>3</option>
                                                                              <option>4</option>
                                                                        </Form.Control>
                                                                  </Form.Group>
                                                            </Form>
                                                      <Button variant="primary">Add To Cart !</Button>
                                                </Card.Body>
                                          </Card>
                                    </Col>
                              </Row>
                        ) : 'Loading'
                  }</Row>
            </Container>
      )
}

export default WomenDetails;