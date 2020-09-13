import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from 'react-bootstrap';
import Home from './components/Home';
import Cart from './components/Cart';
import Signin from './components/Signin';
import Register from './components/Register';
import Women from './routes/Women';
import WomenDetails from './routes/WomenDetails';
import men from './routes/men';
import kids from './routes/kids';
import accessories from './routes/accessories';
import Shipping from './components/Shipping'
import NewProduct from './components/NewProduct';


function App() {
  
  return (
    <React.Fragment>
      <Container>
        <Router>
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart/:id?" component={Cart} />
              <Route path="/signin" component={Signin}/>
              <Route path="/shipping" component={Shipping} />
              <Route exact path="/women" component={Women} />
              <Route path="/womenDetails/:id" component={WomenDetails} />
              <Route exact path="/men" component={men} />
              <Route exact path="/kids" component={kids} />
              <Route exact path="/accessories" component={accessories} />
              <Route path="/register" component={Register} />
              <Route path="/newproduct" component={NewProduct} />
            </Switch>
          </Router>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
