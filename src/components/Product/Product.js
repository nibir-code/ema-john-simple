import React from 'react';
import'./Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating  from "react-rating";

const Product = (props) => {
     const {img,name,seller,price,stock, star} = props.product;
     return (
     <div className='product'>
           <div>
               <img src={img} alt="" />
           </div>
           <div >
               <h4 className='product-name'>{name}</h4>
               <br />
               <p>by:{seller}</p>
               <br />
               <p>${price}</p>
               
               <p><small>only{stock} left in stock order-soon</small></p>
               <Rating
               initialRating={star}
               emptySymbol="far fa-star icons-color"
               fullSymbol="fas fa-star icons-color"
               readonly
               ></Rating>
              
               <button
               onClick={()=>props.handleAddProduct(props.product)}
                className='main-button'><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
           </div>
               
     </div>
     );
};

export default Product;