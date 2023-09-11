"use client";
import { useStateContext } from "@context/StoreContext";
import React, { useEffect } from "react";
import { product } from "@utils";
import { AiOutlineDelete } from "react-icons/ai";
function page() {
  const {
    cartItems,
    onRemove,
    toggleCartItemQuantity,
    totalPrice,
    totalQuantities,
    decQty,
    incQty,
  } = useStateContext();
  useEffect(() => {
    console.log(cartItems, totalPrice, totalQuantities);
  }, [cartItems]);

  return (
    <div className="flex justify-between p-5 gap-4 ">
      <div className="w-[70%] h-full flex flex-col gap-4">
        {cartItems.length > 0 ? (
          cartItems?.map((cartItem) => (
            <div
              key={cartItem._id}
              className="p-4 bg-slate-300 rounded-md flex justify-between items-start"
            >
              <div className="flex gap-2">
                <img
                  src={cartItem.image.url}
                  className="w-[100px] rounded-md"
                />
                <div className="flex flex-col justify-between">
                  <h1 className="text-xl font-semibold ">
                    Title:{" "}
                    <span className=" font-normal text-lg">
                      {" "}
                      {cartItem.title}
                    </span>
                  </h1>
                  <h1 className="text-xl font-semibold ">
                    Price:{" "}
                    <span className=" font-normal text-lg">
                      {" "}
                      {cartItem.price}$
                    </span>
                  </h1>
                  <h1 className="text-xl font-semibold ">
                    Qty:{" "}
                    <span className=" font-normal text-lg">{cartItem.qty}</span>
                  </h1>
                  <h1 className="text-xl font-semibold ">
                    Author:{" "}
                    <span className=" font-normal text-lg">
                      {" "}
                      {cartItem.author}
                    </span>
                  </h1>
                </div>
              </div>
              <div>
                <AiOutlineDelete
                  size={25}
                  className="cursor-pointer"
                  // onClick={() => handleDelete(item)}
                />
              </div>
            </div>
          ))
        ) : (
          <>Go back Shopping </>
        )}
      </div>

      {/* Order */}
      <div className="w-[30%] h-full bg-slate-300 rounded-md p-4 flex flex-col gap-4 ">
        <div className="w-full border-black/10 border-b pb-4 flex justify-between">
          <h1 className="text-xl">Confirm Order</h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full text-lg">
            Total Quantity: {totalQuantities}
          </div>
          <div className="w-full text-lg">Price: {totalPrice}</div>
          <div className="w-full text-lg">Shipping: 5$</div>
        </div>
        <div className="w-full border-black/10 border-t pt-4 flex flex-row justify-between items-center">
          <h1 className="text-xl font-bold">Total Price: {totalPrice + 5}$</h1>
          <button className="px-5 text-xl  text-white rounded-md py-3 bg-indigo-400">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
