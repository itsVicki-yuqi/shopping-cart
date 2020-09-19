import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Container, Image, Col, Row, Breadcrumb, ListGroup, Card, Button, Form} from 'react-bootstrap';
import { detailsProduct } from '../actions/productActions';

function WomenDetails (props) {
      const [qty, setQty] = useState(1);
      const productDetails = useSelector(state => state.productDetails);
      const {product, loading, error} = productDetails;
      //console.log(props);
      const dispatch = useDispatch();
      //console.log(props.match.params.id);
      useEffect(() => {
            dispatch(detailsProduct(props.match.params.id));
            return () => {

            };
      }, []);
      const handleAddToCart = () => {
            props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
      }
      return (
            <Container style={{padding:'0 0'}}>
                  {
                        product ? (      
                              <div>
                                    <Row>
                                          <Breadcrumb style={{marginLeft: '2rem'}}>
                                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                                <Breadcrumb.Item href="/women">{product.category}</Breadcrumb.Item>
                                                <Breadcrumb.Item active>Product Details</Breadcrumb.Item>
                                          </Breadcrumb>
                                    </Row>
                                    <div style={{display:'flex'}}>
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
                                                            <Card.Title>Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}</Card.Title>
                                                                  <Form>
                                                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                                                              <Form.Label>Qty: </Form.Label>
                                                                              <Form.Control as="select" value={qty} onChange={(e) => {setQty(e.target.value)}} className="mr-sm-2">
                                                                                    {[...Array(product.countInStock).keys()].map(x => 
                                                                                          <option key={x+1} value={x+1}>{x+1}</option>
                                                                                    )}
                                                                              </Form.Control>
                                                                        </Form.Group>
                                                                  </Form>
                                                            {product.countInStock > 0 ? <Button onClick={handleAddToCart} variant="primary">Add To Cart !</Button>
                                                            : <Button variant="outline-dark">Out of Stock</Button>}
                                                            
                                                      </Card.Body>
                                                </Card>
                                          </Col>
                                    </div>
                                    
                              </div>
                        ) : 'Loading'
                  }
            </Container>
      )
}

export default WomenDetails;