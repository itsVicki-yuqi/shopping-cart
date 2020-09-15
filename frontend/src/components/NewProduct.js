import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Form, Button, Container, Col, Table } from 'react-bootstrap';
import { saveProduct, listProducts, deleteProduct } from '../actions/productActions';

function NewProduct(props) {
      const [modalVisible, setModalVisible] = useState(false);
      const[id, setId] = useState('');
      const [name, setName] = useState('');
      const [image, setImage] = useState('');
      const [category, setCategory] = useState('');
      const [price, setPrice] = useState('');
      const [countInStock, setCountInStock] = useState('');
      const [description, setDescription] = useState('');
      const productList = useSelector(state => state.productList);
      const { loading, products, error } = productList;
      const productSave = useSelector(state => state.productSave);
      const productDelete = useSelector(state => state.productDelete);
      const {loading: loadingSave, success: successSave, error: errorSave} = productSave;
      const {loading: loadingDelete, success: successDelete, error: errorDelete} = productDelete;
      const dispatch = useDispatch();
      useEffect(() => {
            if(successSave){
                  setModalVisible(false);
            }
            dispatch(listProducts());
            return () => {
                //  
            };
      }, [successSave, successDelete]);
      const openModal = (product) =>{
            setModalVisible(true);
            setId(product._id);
            setName(product.name);
            setCategory(product.category);
            setPrice(product.price);
            setCountInStock(product.countInStock);
            setImage(product.image);
            setDescription(product.description);
      };
      const submitHandler = (e) => {
            e.preventDefault();
            //console.log(id);
            dispatch(saveProduct({_id: id, name, image, category, price, countInStock, description}));
            
      }
      const deleteHandler = (product) => {
            dispatch(deleteProduct(product._id));
      }
      return(
            <Container style={{padding:'5rem 0rem'}}>
                  <div style={{display:'flex', justifyContent:'space-between', margin:'1rem'}}>
                        <div><h3>Products</h3></div>
                        <Button onClick={() => openModal({})} variant="outline-primary">Create Product</Button>
                  </div>

                  {modalVisible && 
                        <div>
                              <div>
                                    <h4 style={{textAlign:'center'}}><b>{id ? "Update Product" : "Create Product"}</b></h4>
                              </div>
                              
                              <hr/>
                              <div>
                                    {loadingSave && <h6>Loading...</h6>}
                                    {errorSave && <h6>{errorSave}</h6>}
                              </div>
                              <div>
                                    <Form onSubmit={submitHandler}>
                                          <Form.Row>
                                                <Form.Group as={Col} md="6">
                                                      <Form.Label>Name</Form.Label>
                                                      <Form.Control value={name} type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter name"/>
                                                </Form.Group>
                                                <Form.Group as={Col} md="6">
                                                      <Form.Label>Price</Form.Label>
                                                      <Form.Control value={price} type="number" onChange={(e) => setPrice(e.target.value)} placeholder="Enter price"/>
                                                </Form.Group>
                                                
                                          </Form.Row>
                                          <Form.Row>
                                                <Form.Group as={Col} md="6">
                                                      <Form.Label>Category</Form.Label>
                                                      <Form.Control value={category} type="text" onChange={(e) => setCategory(e.target.value)} placeholder="women/men/kids/accessories"/>
                                                </Form.Group>
                                                <Form.Group as={Col} md="6">
                                                      <Form.Label>Count In Stock</Form.Label>
                                                      <Form.Control value={countInStock} type="number" onChange={(e) => setCountInStock(e.target.value)} placeholder="Enter number of In Stock"/>
                                                </Form.Group>

                                          </Form.Row>
                                          <Form.Group>
                                                <Form.Label>Image</Form.Label>
                                                <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image URL"/>
                                          </Form.Group>
                                          <Form.Group>
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control type="text" value={description} as="textarea" onChange={(e) => setDescription(e.target.value)} placeholder="Enter product description"/>
                                          </Form.Group>
                                          <Form.Group>
                                                <Button variant="primary" type="submit" block>{id ? "UPDATE" : "CREATE"}</Button>
                                          </Form.Group>
                                          <Form.Group>
                                                <Button variant="secondary" type="button" onClick={() => setModalVisible(false)} block>BACK</Button>
                                          </Form.Group>
                                    </Form>
                              </div>
                        
                        </div>
                  
                  }
                  
                  
                  <div>
                        <Table style={{width:'100%'}} striped bordered hover>
                              <thead>
                                    <tr>
                                          <th>ID</th>
                                          <th>Name</th>
                                          <th>Price</th>
                                          <th>Category</th>
                                          <th>In stock</th>
                                          <th>Action</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {products ? products.map(product => (
                                          <tr key={product._id}>
                                                <td>{product._id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>{product.category}</td>
                                                <td>{product.countInStock}</td>
                                                <td>
                                                      <Button onClick={() => openModal(product)} variant="outline-dark" size="sm">Edit</Button>
                                                      {' '}
                                                      <Button onClick={() => deleteHandler(product)} variant="outline-danger" size="sm">Delete</Button>
                                                </td>
                                          </tr>
                                    )): "Loading"}
                              </tbody>
                        </Table>
                  </div>
                  
            </Container>
      )
}

export default NewProduct;