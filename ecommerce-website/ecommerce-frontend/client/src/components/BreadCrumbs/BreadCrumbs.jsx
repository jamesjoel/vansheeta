import React from 'react'

const BreadCrumbs = () => {
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#" className="text-dark">Home</a></li>
          <li className="breadcrumb-item"><a href="#" className="text-dark">Clothing</a></li>
          <li className="breadcrumb-item"><a href="#" className="text-dark">Mens Fation</a></li>
          <li className="breadcrumb-item active" aria-current="page">All Mens Clothing</li>
        </ol>
      </nav>

      
    </div>
  )
}

export default BreadCrumbs