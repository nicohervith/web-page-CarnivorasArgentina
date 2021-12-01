import React from 'react'

const SocialBar = () => {
  return (
 
      <div class="social-bar">
        
          <a
            href="https://www.facebook.com/carnivorasargentina/"
            className="icon icon-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/carnivorasargentina/"
            className="icon icon-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          
          <a
            href="https://www.youtube.com/channel/UCKTLDeDktDOUG7icVi97wCQ/featured"
            className="icon icon-youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-youtube"></i>
          </a>
        
      </div>

  );
}

export default SocialBar;
