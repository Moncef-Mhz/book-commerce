"use client";
import { useStateContext } from "@context/StoreContext";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
function page() {
  //Adress State
  const [FullName, setFullName] = useState("");
  const [Wilaya, setWilaya] = useState("");
  const [Adress, setAdress] = useState("");
  const [Number, setNumber] = useState("");

  //Context state
  const {
    cartItems,
    setCartItems,
    onRemove,
    toggleCartItemQuantity,
    setTotalQuantities,
    setTotalPrice,
    totalPrice,
    totalQuantities,
    decQty,
    incQty,
  } = useStateContext();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      //Toastify.Warning
      console.log("cartItems is empty");
      return;
    }
    if (FullName == "" || Wilaya == "" || Adress == "" || Number == "") {
      console.log("some field are empty");
      return;
    } else {
      localStorage.setItem("Adress", [FullName, Wilaya, Adress, Number]);
    }
    try {
      const response = await fetch("/api/orders/new", {
        method: "POST",
        body: JSON.stringify({
          FullName,
          Wilaya,
          Adress,
          Number,
          Items: cartItems,
          Price: totalPrice,
        }),
      });
      if (response.ok) {
        //toastify.success
        setCartItems([]);
        setTotalQuantities(0);
        setTotalPrice(0);
      }
    } catch (err) {
      //toastify.error
      console.log(err);
    }
  };

  useEffect(() => {
    const adress = localStorage.getItem("Adress")?.split(",");
    if (adress != null) {
      setFullName(adress[0]);
      setWilaya(adress[1]);
      setAdress(adress[2]);
      setNumber(adress[3]);
    }
    // setFullName(.);
  }, []);

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
      <div className="w-[30%] h-full flex flex-col gap-4">
        <div className="h-full bg-slate-300 rounded-md p-4 flex flex-col gap-4">
          <h1 className="text-xl border-black/10 border-b pb-4">
            Add Your Adress
          </h1>
          <form className="flex flex-col gap-4" onSubmit={submitHandler}>
            <div className="flex flex-col gap-2">
              <label className="text-lg">Full Name:</label>
              <input
                type="text"
                value={FullName}
                onChange={(e) => setFullName(e.target.value)}
                className="rounded-md px-4 py-2 outline-none "
                required
                placeholder="ex: Hal Elrod"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg">Wilaya:</label>
              <input
                type="text"
                required
                value={Wilaya}
                onChange={(e) => setWilaya(e.target.value)}
                className="rounded-md px-4 py-2 outline-none "
                placeholder="ex: Alger"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg">Adress:</label>
              <input
                type="text"
                value={Adress}
                required
                onChange={(e) => setAdress(e.target.value)}
                className="rounded-md px-4 py-2 outline-none "
                placeholder="ex: Mohammadia"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg">Phone Number:</label>
              <input
                type="Number"
                className="rounded-md px-4 py-2 outline-none "
                value={Number}
                minLength={10}
                maxLength={10}
                required
                onChange={(e) => setNumber(e.target.value)}
                placeholder="ex: 07 95784262"
              />
            </div>
          </form>
        </div>
        <div className=" h-full bg-slate-300 rounded-md p-4 flex flex-col gap-4 ">
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
            <h1 className="text-xl font-bold">
              Total Price: {totalPrice + 5}$
            </h1>
            <button
              className="px-5 text-xl  text-white rounded-md py-3 bg-indigo-400"
              onClick={submitHandler}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
