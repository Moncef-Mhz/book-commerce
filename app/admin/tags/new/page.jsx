"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

function page() {
  //State
  const [Tag, setTag] = useState("");

  //adding tag to DB
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const tag = Tag.toLowerCase();
      //Posting the new tag to DB
      const response = await fetch("/api/admin/tag/new", {
        method: "POST",
        body: JSON.stringify({ tag: tag }),
      });

      //checking response
      if (response.ok) {
        setTag("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" w-full bg-slate-100 h-full p-4">
      <div className="flex flex-row w-full  h-full border-b mb-2 pb-2  items-center justify-between">
        <Link href="/admin/tags">
          <AiOutlineArrowLeft size={25} />
        </Link>
        <h1 className="text-lg font-bold uppercase cursor-default">
          Add new Book
        </h1>
      </div>
      <form className="flex flex-col gap-4" onSubmit={submitHandler}>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-lg">
            Add new tag:
          </label>
          <input
            type="text"
            value={Tag}
            onChange={(e) => setTag(e.target.value)}
            className="px-4 py-2 rounded outline-indigo-500 "
            placeholder="ex: Finance"
            required
          />
        </div>
        <div className="mt-2 flex items-center justify-end">
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded text-lg"
            onSubmit={submitHandler}
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default page;
