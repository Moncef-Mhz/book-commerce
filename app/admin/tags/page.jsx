"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";

function TagsPage() {
  //State
  const [tags, setTags] = useState([]);

  //fetching Tags from DB
  const fetchTags = async () => {
    const response = await fetch("/api/admin/tag");
    const data = await response.json();

    setTags(data);
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div className="flex flex-col bg-slate-100 p-4 ">
      <div className="border-b mb-2 pb-2 flex justify-between w-full items-center">
        <Link
          href="/admin/books"
          className="text-lg font-bold uppercase cursor-default"
        >
          All tags
        </Link>
        <Link
          href="/admin/tags/new"
          className="bg-indigo-500 px-4 py-1 rounded"
        >
          <AiOutlinePlus size={25} color="white" />
        </Link>
      </div>
      {tags && tags.length > 0 ? (
        tags.map((item) => (
          <div
            key={item._id}
            className="flex w-full  justify-between px-2 py-2 hover:bg-slate-300 duration-200"
          >
            <h1 className="text-lg capitalize">{item.tag}</h1>
            <AiOutlineDelete
              size={25}
              className="cursor-pointer"
              // onClick={() => handleDelete(item)}
            />
          </div>
        ))
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  );
}

export default TagsPage;
