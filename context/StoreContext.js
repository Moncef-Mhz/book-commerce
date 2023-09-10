"use client";
import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StoreContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [Qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);

  let index;

  const onAdd = (book, qty) => {
    const checkBookinCart = cartItems.find((item) => item._id === book._id);

    setTotalPrice((prevPrice) => prevPrice + book.price * qty);

    setTotalQuantities((prevQty) => prevQty + qty);

    if (checkBookinCart) {
      const updateCartItems = cartItems.map((cartItems) => {
        if (cartItems._id === book._id) {
          return {
            ...cartItems,
            qty: cartItems.qty + qty,
          };
        }
      });
      setCartItems(updateCartItems);
    } else {
      book.qty = qty;
      setTotalQuantities([...cartItems, { ...book }]);
    }
  };
  const onRemove = (book) => {
    foundProduct = cartItems.find((item) => item._id === book._id);
    const newCartItems = cartItems.filter((item) => item._id !== book._id);

    setTotalPrice(
      (prevPrice) => prevPrice - foundProduct.price * foundProduct.qty
    );
    setQty((prevQty) => prevQty - foundProduct.qty);
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((item) => item._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, qty: foundProduct.qty + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
    }
  };
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        decQty,
        incQty,
        onAdd,
        onRemove,
        toggleCartItemQuantity,
        totalPrice,
        Qty,
        setTotalPrice,
        setTotalQuantities,
        totalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
