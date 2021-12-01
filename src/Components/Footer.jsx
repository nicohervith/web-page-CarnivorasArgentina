import React from 'react'
import {Link} from 'react-router-dom'
import logocarg from '../assets/logocarg.png'
import {Routes,Route,Navigate} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="text-white py-4 bg-dark">
        <div className="container">
          <nav className="row">
            <Link
              to="/"
              className="col-12 col-md-3 d-flex align-items-center justify-content-center"
            >
              <img src={logocarg} className="mx-2" height="80" alt="..." />
            </Link>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weight-bold mb-2">Carnívoras Argentina</li>
              <li className="text-center">Gracias por visitarnos</li>
            </ul>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weight-bold mb-2">Enlaces: </li>
              <li className="d-flex justify-content-between">
                <a
                  href="https://www.facebook.com/carnivorasargentina/"
                  className="text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/carnivorasargentina/"
                  class="text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCKTLDeDktDOUG7icVi97wCQ/featured"
                  className="text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-youtube"></i>
                </a>
                <a
                  href="carnivorasargentina@gmail.com"
                  className="text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-envelope"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
