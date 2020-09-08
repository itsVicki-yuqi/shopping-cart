import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';


export default class Home extends Component {
      render() {
            return (
                        <Carousel>
                              <Carousel.Item>
                                    <img className="d-block w-100" src="/images/image02.jpg" alt="First slide"/>
                              </Carousel.Item>
                              <Carousel.Item>
                                    <img className="d-block w-100" src="/images/image01.jpg" alt="Second slide"/>
                              </Carousel.Item>
                              <Carousel.Item>
                                    <img className="d-block w-100" src="/images/image03.jpg" alt="Third slide"/>
                              </Carousel.Item>
                        </Carousel>
            )
      }
}
