"use client";
import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StoreContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <Context.Provider
      value={{ showCart, setShowCart, cartItems, setCartItems }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
