"use client";
// import Image from "next/image";
import React, { useState } from "react";
import {
  AiOutlineLeft,
  AiOutlineDown,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useStateContext } from "@context/StoreContext";

function DetailsPage({ book }) {
  const { onAdd, incQty, Qty, decQty, setShowCart, cartItems } =
    useStateContext();

  //description State
  const [showdescription, setShowDescription] = useState(false);

  const AddingToCartHandler = () => {
    if (Qty < 0) {
      return;
    }
    onAdd(book, Qty);
  };

  return (
    <div className="flex flex-col md:flex-row w-full p-5 ">
      {/* Image */}
      <div className="w-full ">
        <img src={book.image.url} alt={book.title} className="object-contain" />
      </div>

      {/* Title & Price */}
      <div className="flex flex-col mt-3 w-full h-full gap-3">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-bold text-black/80">{book.title}</h1>
          <h1 className="text-xl font-base ">{book.price}$</h1>
        </div>

        {/* Detials */}
        <div className="">
          <div
            className="flex items-center  justify-between"
            onClick={() => setShowDescription((prev) => !prev)}
          >
            <h1 className="text-lg font-semibold">Details</h1>
            <AiOutlineLeft
              className={
                showdescription
                  ? "-rotate-90 duration-150"
                  : "rotate-0 duration-150"
              }
            />
          </div>
          {showdescription ? (
            <p
              className={
                showdescription
                  ? " duration-150 translate-y-0 opacity-100"
                  : "opacity-0 duration-150 -translate-y-40"
              }
            >
              {book.description}
            </p>
          ) : (
            <></>
          )}
        </div>

        {/* Author */}
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">
            Author:
            <span className="text-base text-gray-700 font-normal">
              {" "}
              {book.author}
            </span>
          </h1>
          <h1 className="text-lg font-semibold">
            Job:
            <span className="text-base text-gray-700 font-normal">
              {" "}
              {book.job}
            </span>
          </h1>
        </div>
        {/* QTY & Order */}
        <div className="flex gap-5 justify-between">
          <div className="flex border w-full justify-between p-4">
            <button className="text-xl cursor-pointer" onClick={decQty}>
              -
            </button>
            <div className="text-xl">{Qty}</div>
            <button className="text-xl cursor-pointer" onClick={incQty}>
              +
            </button>
          </div>
          <button
            className="bg-indigo-400 px-5 text-white text-lg  flex items-center justify-between w-full"
            onClick={AddingToCartHandler}
          >
            Add to Cart
            <AiOutlineShoppingCart size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
