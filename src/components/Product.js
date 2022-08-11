import React from 'react'
import Main from './Main';
import Rating from './Rating';
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesomeLogoFull } from '@fortawesome/free-regular-svg-icons';


export default function Product(props) {
 const {product} = props;
   
 
 
 return (
    <div className='product-card' key={product.id}>Product
    <img className='medium' alt='product.title' src={product.image}></img>
    <p>{product.title}</p>
    <div>{product.price}</div>
   <Rating rating={product.rating.rate} numReviews={product.rating.count} />
   {console.log(product.rating.rate)}
    </div>
  )
}
