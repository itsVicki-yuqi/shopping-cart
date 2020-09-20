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
import Men from './routes/Men';
import Kids from './routes/Kids';
import Accessories from './routes/Accessories';
import Shipping from './components/Shipping'
import NewProduct from './components/NewProduct';
import Payment from './components/Payment';
import Placeorder from './components/Placeorder';
import Order from './components/Order';
import Profile from './components/Profile';


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
              <Route exact path="/men" component={Men} />
              <Route exact path="/kids" component={Kids} />
              <Route exact path="/accessories" component={Accessories} />
              <Route path="/register" component={Register} />
              <Route path="/newproduct" component={NewProduct} />
              <Route path="/payment" component={Payment}/>
              <Route path="/placeorder" component={Placeorder}/>
              <Route path="/order/:id" component={Order} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </Router>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
