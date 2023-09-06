import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function TagsPage() {
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
      {/* {product.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))} */}
    </div>
  );
}

export default TagsPage;
