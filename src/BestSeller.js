import React from 'react'

export default function BestSeller() {
  return (
    <div className='product'>
      <div className='product__info'>
        <div className='v'>
        <img src={image} alt=""/>
        </div>
      
      <p className='product__prices'>{title}</p>
        <p className='product__prices'>
            <small>Rs</small>
            <strong>69</strong>
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
