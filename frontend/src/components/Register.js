import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Form, Button, Container } from 'react-bootstrap';
import {register} from '../actions/userActions'
import { Link } from 'react-router-dom';

function Register(props) {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [rePassword, setRePassword] = useState('');
      const userRegister = useSelector(state => state.userRegister);
      const {loading, userInfo, error} = userRegister;
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
            dispatch(register(name, email, password));
      }
      return(
            <Container className="justify-content-center" style={{width: '18rem', padding:'10rem 0'}}>
                  <h4 className="registerHeader"><b>Create an account</b></h4>
                  <hr/>
                  <div>
                        {loading && <h6>Loading...</h6>}
                        {error && <h6>{error}</h6>}
                  </div>
                  <Form onSubmit={submitHandler}>
                        <Form.Group>
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="name" onChange={(e) => setName(e.target.value)} placeholder="Enter name"/>
                        </Form.Group>
                        <Form.Group>
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
                        </Form.Group>
                        <Form.Group>
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                        </Form.Group>
                        <Form.Group>
                              <Form.Label>Re-Enter Password</Form.Label>
                              <Form.Control type="password" onChange={(e) => setRePassword(e.target.value)} placeholder="Password"/>
                        </Form.Group>
                        <Form.Group>
                              <Button variant="primary" type="submit" block>SIGN IN</Button>
                        </Form.Group>
                  </Form>
                  <hr />
                  <h5 className="createaccountHeader">Already have an account</h5>
                  <Button variant="outline-primary" block><Link to="/signin">SIGN IN</Link></Button>
            </Container>
      )
}

export default Register;