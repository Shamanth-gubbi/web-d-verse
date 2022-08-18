import React from 'react';
import "./Product.css";
 

export default function Product({id,image,title,price,rating}) {
  
  return ( 
    <div className='product'>
      <div className='product__info'>
      <img src={image} alt=""/>
      <p className='product__prices'>{title}</p>
        <p className='product__prices'>
            <small>Rs</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
            {
                Array(rating)
                .fill()
                .map((_,i)=>
                <p>⭐</p>)
            }
        </div>
      </div>
      
      <button  >Add to basket</button>
    </div>
  )
}
