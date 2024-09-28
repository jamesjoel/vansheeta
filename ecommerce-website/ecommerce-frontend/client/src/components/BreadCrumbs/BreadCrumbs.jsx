import React from 'react'
import Slice from './Slice'

const BreadCrumbs = () => {
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <Slice data={"Home"} />
          <Slice data={"Clothing"} />
          <Slice data={"Men Fashion"} />
          <Slice data={"All Mens Fashion"} />
          <Slice lastTag={true} data={"DEMO ..."} />
          
          
        </ol>
      </nav>

      
    </div>
  )
}

export default BreadCrumbs