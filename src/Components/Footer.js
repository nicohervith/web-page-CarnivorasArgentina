import React from 'react'
import {Link} from 'react-router-dom'
import logocarg from '../assets/logocarg.png'


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
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-youtube"></i>
                <i class="bi bi-envelope"></i>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
