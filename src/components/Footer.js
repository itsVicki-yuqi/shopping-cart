import React from 'react';
import { Navbar } from 'react-bootstrap';

function Footer() {
      return (
            <footer id="footer">
                  <br />
                  <Navbar br="light" variant="light">

                        
                  </Navbar>
                  <div class="row no-gutters social-container">
                        <div class="col"><span class="icon mdi mdi-facebook"></span><span>Facebook</span></div>
                        <div class="col"><span class="icon mdi mdi-instagram"></span><span>instagram</span></div>
                        <div class="col"><span class="icon mdi mdi-twitter"></span><span>twitter</span></div>
                        <div class="col"><span class="icon mdi mdi-youtube-play"></span><span>google</span></div>
                  </div>
            </footer>
      )
}

export default Footer;
