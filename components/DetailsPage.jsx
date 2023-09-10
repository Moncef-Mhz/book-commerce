"use client";
// import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineDown } from "react-icons/ai";

function DetailsPage({ book }) {
  const [showdescription, setShowDescription] = useState(false);
  return (
    <div className="flex flex-col md:flex-row w-full p-5 ">
      <div className="w-full ">
        <img src={book.image.url} alt={book.title} className="object-contain" />
      </div>
      <div className="flex flex-col mt-3 w-full h-full gap-3">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-bold text-black/80">{book.title}</h1>
          <h1 className="text-xl font-base ">{book.price}$</h1>
        </div>
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
                showdescription ? " duration-150" : "opacity-0 duration-150"
              }
            >
              {book.description}
            </p>
          ) : (
            <></>
          )}
          {/* {showdescription ? (
            <></>
          ) : (
            <div className="w-full h-[0.1px] bg-black/40 mt-3"></div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
