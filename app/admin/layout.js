import Link from "next/link";
import React from "react";

function layout({ children }) {
  return (
    <main className="flex w-full items-start justify-between relative p-5">
      <div className="w-[30%] md:w-[35%] lg:w-[40%] h-full  ">
        <ul className="flex flex-col gap-10">
          <li className="cursor-pointer text-lg">
            <Link href="/admin">Dashboard</Link>
          </li>
          <li className="cursor-pointer text-lg">
            <Link href="/admin/books">Books</Link>
          </li>
          <li className="cursor-pointer text-lg">
            <Link href="/admin/tags">Tags</Link>
          </li>
          <li className="cursor-pointer text-lg">
            <Link href="/admin/users">Authors</Link>
          </li>
          <li className="cursor-pointer text-lg">
            <Link href="/admin/orders">Orders</Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">{children}</div>
    </main>
  );
}

export default layout;
