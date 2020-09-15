import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Container, ProgressBar } from 'react-bootstrap';
import {saveShipping} from '../actions/cartActions'

function Shipping(props) {
      const [address, setAddress] = useState('');
      const [city, setCity] = useState('');
      const [state, setState] = useState('');
      const [postalCode, setPostalCode] = useState('');
      const [country, setCountry] = useState('');
      const dispatch = useDispatch();
      const submitHandler = (e) => {
            e.preventDefault();
            dispatch(saveShipping({address, city, state, postalCode, country}));
            props.history.push("payment");
      }
      return(
            <Container className="justify-content-center" style={{width: '22rem', padding:'5rem 0'}}>
                  <ProgressBar style={{marginBottom:'2rem'}} now={50}/>
                  <h4 className="registerHeader"><b>Shipping</b></h4>
                  <hr/>
                  <Form onSubmit={submitHandler}>
                        <Form.Group>
                              <Form.Label>Address</Form.Label>
                              <Form.Control type="text" onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address"/>
                        </Form.Group>
                        <Form.Group>
                              <Form.Label>City</Form.Label>
                              <Form.Control type="text" onChange={(e) => setCity(e.target.value)} placeholder="Enter City"/>
                        </Form.Group>
                        <Form.Group>
                              <Form.Label>State</Form.Label>
                              <Form.Control type="text" onChange={(e) => setState(e.target.value)} placeholder="Enter State"/>
                        </Form.Group>
                        <Form.Group>
                              <Form.Label>Postal Code</Form.Label>
                              <Form.Control type="text" onChange={(e) => setPostalCode(e.target.value)} placeholder="Enter Postal Code"/>
                        </Form.Group>
                        <Form.Group>
                              <Form.Label>Country</Form.Label>
                              <Form.Control type="text" onChange={(e) => setCountry(e.target.value)} placeholder="Enter Country"/>
                        </Form.Group>
                        <Form.Group>
                              <Button variant="primary" type="submit" block>CONTINUE</Button>
                        </Form.Group>
                  </Form>
                  <hr />
            </Container>
      )
}

export default Shipping;