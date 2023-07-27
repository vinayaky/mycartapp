import React from 'react';
import Products from './products';

export default function Productlist(props) {
  
  if (props.productlist.length===0){
   return( <h1> no product in cart list</h1>)
  }
  return (
    
    props.productlist.map((product,i)=>{
    return( <Products product={product} productDelete={props.productDelete} key={i} decQuantity={props.decQuantity} incQuantity={props.incQuantity} index={i}/>)
     })
  )
}
