import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Form, Button, Container } from 'react-bootstrap';
import {signin} from '../actions/userActions'
import { Link } from 'react-router-dom';

function Signin(props) {
      
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const userSignin = useSelector(state => state.userSignin);
      const {loading, userInfo, error} = userSignin;
      //console.log(error)
      const dispatch = useDispatch();
      useEffect(() => {
            if(userInfo){
                  props.history.push("/");
            }
            return () => {
                  
            };
      }, [userInfo]);
      const submitHandler = (e) => {
            e.preventDefault();
            dispatch(signin(email, password));
      }
      return(
            <Container className="justify-content-center" style={{width: '18rem', padding:'10rem 0'}}>
                  <h4 className="signinHeader"><b>Sign in to your account</b></h4>
                  <hr/>
                  <div>
                        {loading && <h6>Loading...</h6>}
                        {error && <h6>{error}</h6>}
                  </div>
                  <Form onSubmit={submitHandler}>
                        <Form.Group>
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
                        </Form.Group>
                        <Form.Group>
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                        </Form.Group>
                        <Form.Group>
                              <Button variant="primary" type="submit" block>SIGN IN</Button>
                        </Form.Group>
                  </Form>
                  <hr />
                  <h5 className="createaccountHeader">New to YS Shopping</h5>
                  <Button block><Link to="/register">CREATE ACCOUNT</Link></Button>
            </Container>
      )
}

export default Signin;