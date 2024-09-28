import React from 'react'

const Slice = (x) => {
  return (
    <>
    
    {
        x.lastTag==true 
        ?
        <li className="breadcrumb-item active">{x.data}</li>
        :
        <li className="breadcrumb-item"><a href="#" className="text-dark">{x.data}</a></li>
    }
    </>
  )
}

export default Slice