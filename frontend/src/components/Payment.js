import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { Form, Button, Container, ProgressBar, ToggleButton } from 'react-bootstrap';
import {savePayment} from '../actions/cartActions'
import {PayPalButton} from 'react-paypal-button-v2'

function Payment(props) {
      const [paymentMethod, setPaymentMethod] = useState('');
      const dispatch = useDispatch();
      const submitHandler = (e) => {
            e.preventDefault();
            dispatch(savePayment({paymentMethod}));
            props.history.push("placeorder");
      }
      return(
            <Container className="justify-content-center" style={{width: '22rem', padding:'5rem 0'}}>
                  <ProgressBar style={{marginBottom:'2rem'}} now={75}/>
                  <h4 className="registerHeader"><b>Payment</b></h4>
                  <hr/>
                  <Form onSubmit={submitHandler}>
                        <Form.Group>
                              <Form.Label className="btn">
                              <input cheked={true}type="radio" name="paymentMethod" value="paypal" onChange={(e) => setPaymentMethod(e.target.value)} style={{margin:'1rem'}}>
                              </input>
                              <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-small.png" alt="Check out with PayPal" /> 
                              </Form.Label>
                        </Form.Group>
                        <Form.Group>
                              <Button variant="primary" type="submit" block>CONTINUE</Button>
                        </Form.Group>
                  </Form>
                  <hr />
            </Container>
      )
}

export default Payment;