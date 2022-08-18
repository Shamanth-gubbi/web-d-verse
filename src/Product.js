import React from "react";
import "./Product.css";

export default function Product({ id, image, title, price, rating }) {
  return (
    // <div className='product'>
    //   <div className='product__info'>
    //     <div className='v'>
    //     <img src={image} alt=""/>
    //     </div>

    //   <p className='product__prices'>{title}</p>
    //     <p className='product__prices'>
    //         <small>Rs</small>
    //         <strong>{price}</strong>
    //     </p>
    //     <div className='product__rating'>
    //         {
    //             Array(rating)
    //             .fill()
    //             .map((_,i)=>
    //             <p>⭐</p>)
    //         }
    //     </div>
    //   </div>
    <div>
      <figure className="snip1527">
        <div className="image">
          <img src="/images/pulyogre.jpg" alt="pr-sample23" />
        </div>
        <figcaption>
          <div className="date">
            <span class="day">81</span>
            {/* <span class="month">Oct</span> */}
          </div>
          <div className="date">$3</div>
          <h3>Pulyogre</h3>
          <p>
            A tasty sand healty food from the south india made with rice ,oil
            and some desi spices. Can be had with had any time from moring
            breakfast to dinner
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
