import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import image2 from './images/image01.jpg';
import image1 from './images/image02.jpg';
import image3 from './images/image03.jpg';


import { Container, Carousel } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Carousel>
                  <Carousel.Item>
                        <img className="d-block w-100" src={ image1 } alt="First slide"/>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img className="d-block w-100" src={ image2 } alt="Second slide"/>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img className="d-block w-100" src={ image3 } alt="Third slide"/>
                  </Carousel.Item>
            </Carousel>
        <br />
        <Footer />
      </Container>
      
    </div>
  );
}

export default App;
