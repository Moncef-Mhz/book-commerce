"use client";
import React, { useEffect, useState } from "react";
// import { connectToDB } from "@utils/ConnectToDB";
import { AiOutlinePlus } from "react-icons/ai";
import { product } from "@utils";
import Link from "next/link";
import SelectDropdown from "@components/Dropdown";

function Books() {
  const [allBooks, setAllBooks] = useState([]);

  //fetching books data
  const fetchBook = async () => {
    const response = await fetch("/api/admin/books");
    const data = await response.json();

    setAllBooks(data);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div className="flex flex-col bg-slate-100 p-4 ">
      <div className="border-b mb-2 pb-2 flex justify-between w-full items-center">
        <Link
          href="/admin/books"
          className="text-lg font-bold uppercase cursor-default"
        >
          All books
        </Link>
        <Link
          href="/admin/books/new"
          className="bg-indigo-500 px-4 py-1 rounded"
        >
          <AiOutlinePlus size={25} color="white" />
        </Link>
      </div>
      {product.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      {/* <div className="bg-indigo-200 overflow-hidden w-auto">
        <SelectDropdown />
      </div> */}
    </div>
  );
}

export default Books;
