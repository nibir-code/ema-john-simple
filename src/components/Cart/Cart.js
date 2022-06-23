import React from 'react';
import './Cart.css';

const Cart = (props) => {
     const {cart} = props;
     //const total = cart.reduce((total,prd)=>total+prd.price,0);
     let total = 0;
     for (const product of cart){
          total = total + product.price;
     }
     let shipping = 0;
     if(total>35){
          shipping=0;
     }
     else if (total>15){
          shipping=4.99;
     }
     else if(total>0) {
          shipping= 12.99;
     }
          
     
     const tax = (total/10).toFixed(2);
     const formatNumber = num =>{
          const precision = num.toFixed(2);
          return Number(precision);
     }
     return (
          <div>
               <h1 className='title'>Order summary</h1>
               <p>Item ordered: {cart.length}</p>
               <p>Product price: {formatNumber(total)}</p>
               <p><small>Shipping cost: {shipping}</small></p>
               <p><small>Tax+Vat :{tax}</small></p>
               <p className='total-price'>Total price: {formatNumber(total+shipping)}</p>
               
          </div>
     );
};

export default Cart;