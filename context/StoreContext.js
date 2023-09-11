"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const StoreContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [Qty, setQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);

  let foundProduct;
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

      // localStorage.setItem("cartItems", JSON.stringify([updateCartItems]));
    } else {
      book.qty = qty;
      setCartItems([...cartItems, { ...book }]);
      // localStorage.setItem("cartItems", JSON.stringify([cartItems]));
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
    } else if (value === "dec") {
      if (foundProduct.qty > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, qty: foundProduct.qty - 1 },
        ]);
        setTotalPrice((prevPrice) => prevPrice - foundProduct.price);
        setTotalQuantities((prevQty) => prevQty - 1);
      }
    }
  };
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 0) return 0;

      return prevQty - 1;
    });
  };

  // localStorage.setItem("cartItems", JSON.stringify([cartItems]));
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
