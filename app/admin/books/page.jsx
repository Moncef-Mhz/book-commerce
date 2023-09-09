"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

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

  //Delete handler
  // const handleDelete = async (book) => {
  //   const hasConfirmed = confirm("Are you sure you want to delete");

  //   if (hasConfirmed) {
  //     try {
  //       await fetch(`/api/admin/books/${book._id}`, {
  //         method: "DELETE",
  //       });

  //       const filtedPost = allBooks.filter((item) => item._id !== book._id);
  //       setAllBooks(filtedPost);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

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
      <div className="flex flex-col ">
        {allBooks && allBooks.length > 0 ? (
          allBooks.map((item) => (
            <div
              key={item._id}
              className="flex w-full  justify-between px-2 py-2 hover:bg-slate-300 duration-200 items-center"
            >
              <div className="flex items-center gap-3">
                <Image src={item.image.url} width={30} height={30} />
                <h1 className="text-lg">{item.title}</h1>
              </div>
              <div className="flex items-center justify-between gap-3">
                <AiOutlineEdit size={25} className="cursor-pointer" />
                <div className="py-2 w-[0.5px] bg-black/30 "></div>
                <AiOutlineDelete
                  size={25}
                  className="cursor-pointer"
                  // onClick={() => handleDelete(item)}
                />
              </div>
            </div>
          ))
        ) : (
          <h1>No data</h1>
        )}
      </div>
      {/* <div className="bg-indigo-200 overflow-hidden w-auto">
        <SelectDropdown />
      </div> */}
    </div>
  );
}

export default Books;
