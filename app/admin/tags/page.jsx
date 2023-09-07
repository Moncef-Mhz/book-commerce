"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

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
      {tags.map((item) => (
        <div key={item._id}>{item.tag}</div>
      ))}
    </div>
  );
}

export default TagsPage;
