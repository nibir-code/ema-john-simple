import React, { useState } from 'react';
import fakeData from "./../../fakeData";
import './Shop.css';
import Product from "./../Product/Product";
import Cart from "./../Cart/Cart";
import {addToDb, getStoredCart}  from "../../utilities/fakedb.js"
import { useEffect } from 'react';

const Shop = () => {
      const first81 = fakeData.slice(0,81);
     const [products,setProduts] = useState(first81);
     const [cart,setCart] = useState([]);
     const[displayProducts ,setDisplayProducts] = useState([]);

     useEffect(()=>{
          fetch('./product.json')
          .then(res=> res.json())
          .then(data=>{
               setProduts(data);
               setDisplayProducts(data);
          });
     },[])

     useEffect(()=>{
          
         if(products.length){
          const savedCart = getStoredCart();
          const storedCart = [];
          for(const key in savedCart ){
               const addedProduct = products.find(product => product.key === key);
               storedCart.push(addedProduct);
           }
           setCart(storedCart)
         }
     },[products])

const handleAddProduct = (product) => {
     console.log('product added',product);
     const newCart =[...cart,product];
     setCart(newCart);
     //save to local storage (for now)
     addToDb(product.key)
}
     const handleSearch = event => {
     const searchText = event.target.value;

     const matchedProducts = products.filter(product=> product.name.toLowerCase()
     .includes(searchText.toLowerCase()));
     
     setDisplayProducts(matchedProducts);
     
  }
    return (
          <div>
            <div className="search-container">
               <input
                 type="text" 
                 onChange={handleSearch}
                 placeholder='search-product'
                 />
            </div>
            <div className='shop-container'>
            <div className='product-container'>
             {
                  displayProducts.map(pd=><Product
                       handleAddProduct={handleAddProduct}
                        product={pd}>
                        </Product>)
             }
          </div>
             <div className='cart-container'>
                  <Cart cart={cart}></Cart>
             </div>
         </div>
          </div>
     );
};

export default Shop;