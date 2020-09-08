import React from 'react';
import { Container, Image, Col, Row, Breadcrumb, ListGroup, Card, Button, Form } from 'react-bootstrap';
import data from '../data';
import { Link } from 'react-router-dom';

function womenDetails (props) {
      //console.log(props.match.params.id);
      const product = data.products.find(x => x._id === props.match.params.id);
      return (
            <Container>
                  
                  <Breadcrumb style={{padding: '1rem'}}>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/women">Women</Breadcrumb.Item>
                        <Breadcrumb.Item active>Product Details</Breadcrumb.Item>
                  </Breadcrumb>
      
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
                                          <Card.Text>
                                                <Form>
                                                      <Form.Group controlId="exampleForm.ControlSelect1">
                                                            <Form.Label>Qty: </Form.Label>
                                                            <Form.Control as="select" className="mr-sm-2" custome>
                                                                  <option>1</option>
                                                                  <option>2</option>
                                                                  <option>3</option>
                                                                  <option>4</option>
                                                            </Form.Control>
                                                      </Form.Group>
                                                </Form>
                                          </Card.Text>
                                          <Button variant="primary">Add To Cart !</Button>
                                    </Card.Body>
                              </Card>
                        </Col>
                  </Row>
            </Container>
      )
}

export default womenDetails;