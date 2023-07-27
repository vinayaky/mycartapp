import React from 'react'

export default function Footer(props) {
  return (
    <div className="container mt-4 fixed-bottom">
    <div className="row mb-1"  >
   
    <button type="button" className="col-1 btn btn-primary" onClick={()=>{ props.resatdata() }}>reset </button>         
   
    <div className="col-10 bg-dark text-center text-white"> {props.totalAmount}   </div>
   
    <button type="button" className="col-1 btn btn-primary">payment </button>         
   
    </div>
    </div>
  )
}
