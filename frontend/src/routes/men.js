import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { Container, Card, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import { listProducts } from '../actions/productActions';

function Men(props) {
      //const [products, setProduct] = useState([]);
      const productList = useSelector(state => state.productList);
      const { products, loading, error } = productList;
      const category = props.match.path ? (props.match.path.split("/")[1]) : 1;
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(listProducts(category));
            return () => {
                  //
            };
      }, [])
      //console.log(loading);
      //console.log(products);
      return (
            <Container>{
                  <Row className="d-flex flex-wrap">{
                        products ? products.map ((product) => 
                              <Col key={product._id} className="p-2 flex-fill col-example" xs={4}>
                                    <Card style={{ width: '18rem', height: '38rem'}}>
                                          <Link style={{ color: 'black' }} to={'/womenDetails/' + product._id}>
                                                <Card.Img style={{ width: '18rem', height: '28rem'}} variant="top" src={product.image} />
                                          </Link>
                                          <Card.Body>
                                          <Card.Title> 
                                                <Link style={{ color: 'black' }} to={'/womenDetails/' + product._id}>{product.name}</Link>
                                          </Card.Title>
                                          <Card.Text>$ {product.price}</Card.Text>
                                          <Link to={'/womenDetails/' + product._id}><Button variant="outline-primary">Add to Cart</Button></Link>
                                          
                                          </Card.Body>

                                    </Card>

                              </Col>
                        ) : "Loading"
                  }</Row>
            
            }</Container>
            
            
      )
}

export default Men;
