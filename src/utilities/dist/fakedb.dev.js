"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteShoppingCart = exports.removeFromDb = exports.addToDb = exports.getStoredCart = void 0;

// use local storage to manage cart data
var getDb = function getDb() {
  return localStorage.getItem('shopping_cart');
};

var addToDb = function addToDb(id) {
  var shoppingCart = {}; //get the shopping cart from local storage

  var storedCart = localStorage.getItem('shopping-cart');

  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } // add quantity


  var quantity = shoppingCart[id];

  if (quantity) {
    var newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

exports.addToDb = addToDb;

var removeFromDb = function removeFromDb(id) {
  var storedCart = localStorage.getItem('shopping-cart');

  if (storedCart) {
    var shoppingCart = JSON.parse(storedCart);

    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
  }
};

exports.removeFromDb = removeFromDb;

var deleteShoppingCart = function deleteShoppingCart() {
  localStorage.removeItem('shopping-cart');
};

exports.deleteShoppingCart = deleteShoppingCart;

var getStoredCart = function getStoredCart() {
  var exists = getDb();
  return exists ? JSON.parse(exists) : {};
};

exports.getStoredCart = getStoredCart;