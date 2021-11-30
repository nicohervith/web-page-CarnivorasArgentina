import React from 'react'
import venus5 from '../assets/venus5.png'
import hibridas from "../assets/hibridas.png";
import nepenthes from '../assets/nepenthes.png'
import collage1 from '../assets/collage1.jpg'
import collage2 from "../assets/collage2.jpg";
import collage3 from "../assets/collage3.jpg";

const Carousel = () =>{
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={collage1} className="d-block" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={collage2} className="d-block" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={collage3} className="d-block" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

    </div>
    
    )

}

export default Carousel;