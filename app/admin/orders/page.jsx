"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineInfoCircle } from "react-icons/ai";

function OrderPage() {
  const [infoTog, setInfoTog] = useState(false);
  const [infoData, setInfoData] = useState([]);
  const [Orders, setOrders] = useState([]);

  const fetchOrder = async () => {
    const response = await fetch("/api/orders");
    const data = await response.json();

    setOrders(data);
  };

  console.log(infoTog);
  useEffect(() => {
    fetchOrder();
    console.log(infoData);
  }, []);
  return (
    <div className="flex flex-col bg-slate-100 p-4">
      <div className="border-b mb-2 pb-2 flex justify-between w-full items-center">
        <h1 className="text-lg font-bold uppercase cursor-default">
          All Orders
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        {Orders && Orders.length > 0 ? (
          Orders.map((item) => (
            <div
              key={item._id}
              className="p-2 bg-slate-400 rounded-md flex flex-row justify-between  h-full w-full"
            >
              <div className="flex flex-col ">
                <h1 className="text-base font-bold">
                  Name: <span className="font-normal">{item.FullName}</span>
                </h1>
                <h1 className="text-base font-bold">
                  Wilaya: <span className="font-normal">{item.Wilaya}</span>
                </h1>
                <h1 className="text-base font-bold">
                  Adress: <span className="font-normal">{item.Adress}</span>
                </h1>
                <h1 className="text-base font-bold">
                  Phone Number:{" "}
                  <span className="font-normal"> {item.Number}</span>
                </h1>
              </div>
              <div className="h-full flex flex-col justify-between  gap-12">
                <AiOutlineInfoCircle
                  size={25}
                  className="cursor-pointer"
                  onClick={() => {
                    setInfoTog((prev) => !prev);
                    setInfoData(item.Items);
                  }}
                />
                <AiOutlineDelete size={25} className="cursor-pointer" />
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default OrderPage;
