// 
import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addProduct = (product, quantity) => {
    // Find the index of the product in the cart by its ID
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with the given quantity
      setCart([...cart, { id: product.id, quantity, price: product.price }]);
    }
  };

  // Function to calculate the total price of products in the cart
  const totalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  // Function to calculate the total quantity of products in the cart
  const totalProduct = () => {
    let total = 0;

    // Create a map to store the counts of each product ID in the cart
    const productCounts = new Map();

    cart.forEach((item) => {
      if (productCounts.has(item.id)) {
        // If the product ID is already in the map, add the quantity to the count
        productCounts.set(item.id, productCounts.get(item.id) + item.quantity);
      } else {
        // If it's not in the map, initialize the count with the quantity
        productCounts.set(item.id, item.quantity);
      }
    });

    // Sum up the counts to get the total products in the cart
    productCounts.forEach((count) => {
      total += count;
    });

    return total;
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Function to remove a specific product from the cart
  const removeProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, totalPrice, totalProduct, clearCart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}
