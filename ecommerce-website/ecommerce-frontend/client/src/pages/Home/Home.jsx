import React from 'react'

const Home = () => {
  return (
    <>
    <div className="container">
      <h3>All Product <span className="fw-light">(25 Product)</span></h3>
      <div className="row">
        <div className="col-md-10">
          <p>FILTERS : 
            <button className="btn btn-outline-dark text-dark">All Product</button>
            <button className="btn btn-outline-dark text-dark">T-Shirt</button>
            <button className="btn btn-outline-dark text-dark">Jens</button>
            <button className="btn btn-outline-dark text-dark">Polo T-Shirt</button>
          </p>
        </div>
        <div className="col-md-2">
          <div className="dropdown">
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
              Sort : Price Low to High
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Price Low to High</a></li>
              <li><a className="dropdown-item" href="#">Price Heigh to Low</a></li>
              <li><a className="dropdown-item" href="#">Revelance</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card m-3 border-0">
            <img className="card-img-top" src="assets/images/bb5c338b-f2c4-4c32-acc4-a5918c8e6ad41568109371315-Gap-Mens-Logo-Hoodie-Sweatshirt-6931568109369450-1 1.png" alt="Card image" />
            <div className="card-body">
              <h6 className="card-title">GAP</h6>
              <p className="card-text mb-0">Mens T-Shirt</p>
              <p><strong>$599</strong> <del>$1200</del> <small className="text-danger">(50% OFF)</small></p>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
    </>
  )
}

export default Home