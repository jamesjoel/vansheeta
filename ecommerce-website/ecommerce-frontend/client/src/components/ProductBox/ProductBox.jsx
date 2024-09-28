import React from 'react'

const ProductBox = ({cardInfo}) => {
  return (
    <div className="col-md-3">
          <div className="card m-3 border-0">
            <img className="card-img-top" style={{height : "250px"}} src={`http://localhost:3000/images/${cardInfo.image}`} alt="Card image" />
            <div className="card-body">
              <h6 className="card-title">{cardInfo.title}</h6>
              <p className="card-text mb-0">{cardInfo.category}</p>
              <p><strong>${cardInfo.price}</strong> <del>$1200</del> <small className="text-danger">({cardInfo.discount}% OFF)</small></p>
            </div>
          </div>
        </div>
  )
}

export default ProductBox