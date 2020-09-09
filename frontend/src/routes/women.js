import React, { useState, useEffect } from 'react'
import { Container, Card, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Women(props) {
      const [products, setProduct] = useState([]);
      useEffect(() => {
            const fetchData = async () =>{
                  const {data} = await axios.get("/api/products");
                  setProduct(data);
            }
            console.log(products);
            fetchData();
            return () => {
                  //
            }
      }, []);

      return (
            <Container>{
                  <Row className="d-flex flex-wrap">{
                              products.map(product =>
                                    <Col key={product._id} className="p-2 flex-fill col-example" xs={4}>
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

export default Women;
