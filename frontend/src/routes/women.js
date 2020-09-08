import React from 'react'
import { Container, Card, Button, Col, Row } from 'react-bootstrap';
import data from '../data';
import { Link } from 'react-router-dom';

function women(props) {
      return (
            <Container>{
                  <Row className="d-flex flex-wrap">{
                              data.products.map(product =>
                                    <Col className="p-2 flex-fill col-example" xs={4}>
                                          < Card style={{ width: '18rem', height: '38rem'}}>
                                                <Link style={{ color: 'black' }} to={'/womenDetails/' + product._id}>
                                                <Card.Img style={{ width: '18rem', height: '28rem'}} variant="top" src={product.image} /></Link>
                                                <Card.Body>
                                                      <Card.Title> <Link style={{ color: 'black' }} to={'/womenDetails/' + product._id}>{product.name}</Link></Card.Title>
                                                      <Card.Text>$ {product.price}
                                                      </Card.Text>
                                                <Button variant="primary">Add to Cart</Button>
                                                </Card.Body>
                                          </Card>
                                    </Col>
                              )  
 
                  }</Row>
                  
            }</Container>
            
      )
}

export default women;
