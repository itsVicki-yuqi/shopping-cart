import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from 'react-bootstrap';
import Home from './components/Home';
import Cart from './components/Cart';
import Signin from './components/Signin';
import Register from './components/Register';
import women from './routes/women';
import womenDetails from './routes/womenDetails';
import men from './routes/men';
import kids from './routes/kids';
import accessories from './routes/accessories';





function App() {
  return (
    <React.Fragment>
      <Container>
        <Router>
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart/:id" component={Cart} />
              <Route path="/signin" component={Signin} />
              <Route exact path="/women" component={women} />
              <Route path="/womenDetails/:id" component={womenDetails} />
              <Route exact path="/men" component={men} />
              <Route exact path="/kids" component={kids} />
              <Route exact path="/accessories" component={accessories} />
              <Route path="register" component={Register} />
            </Switch>
          </Router>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
