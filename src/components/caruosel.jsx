import React, { useState, useEffect } from 'react';
import slide1 from './images/slide-home-1.jpg'
import slide2 from './images/slide-home-2.jpg'
import slide3 from './images/slide-home-3.jpg';
import slide4 from './images/slide-home-4.jpg';
import slide5 from './images/slide-home-5.jpg';
import slide6 from './images/slide-home-6.jpg';
import slide7 from './images/slide-home-7.jpg';
import slide8 from './images/slide-home-8.jpg';
import slide9 from './images/slide-home-9.jpg';
import slide10 from './images/slide-home-10.jpg';
import slide11 from './images/slide-home-11.jpg';
import './carousel.css';

function Carousel(){
    return(
<div id="carousel-main-div" className="img-fluid container d-none d-sm-block img-fluid">
      <div id="carouselExampleIndicators" class="img-fluid carousel carousel-home slide" data-ride="carousel">
        <div class="img-fluid carousel-inner">
          <div class="img-fluid carousel-item active">
            <img class="d-block w-100 carousel-img" src={slide3} alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide1} alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide2} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide4} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide5} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide6} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide7} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide8} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide9} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide10} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide11} alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      </div>
    );
}
export default Carousel;    
