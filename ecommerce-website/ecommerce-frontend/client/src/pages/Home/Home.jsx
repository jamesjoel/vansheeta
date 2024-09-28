import React, {useEffect, useState} from 'react'
import ProductBox from '../../components/ProductBox/ProductBox'
import axios from 'axios'

const Home = () => {

  let [pro, setPro] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/product")
    .then(response=>{
      setPro(response.data);
    })
  },[])

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
        {
          pro.map(item=><ProductBox cardInfo={item} key={item._id} />)
        }
        
        
        
      </div>
    </div>
    </>
  )
}

export default Home