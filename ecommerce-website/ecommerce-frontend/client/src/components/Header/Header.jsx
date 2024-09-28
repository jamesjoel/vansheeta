import React from 'react'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="assets/images/logo.png" style={
                { 
                    width: "200px",
                    height: "50px",
                    top: "15px",
                    left: "18px",
                    gap: "0px",
                    opacity: "0px",
                }
            }/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Shop</a>
                <ul className="dropdown-menu">
                  
                  <li><a className="dropdown-item" href="#">Another link</a></li>
                  <li><a className="dropdown-item" href="#">A third link</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Our Stores</a>
              </li>
              
            
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header