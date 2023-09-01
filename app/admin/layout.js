import React from "react";

function layout({ children }) {
  return (
    <main className="flex w-full items-start justify-between relative">
      <div className="w-[30%] md:w-[35%] lg:w-[40%] h-full p-5 ">
        <ul className="flex flex-col gap-10">
          <li className="cursor-pointer text-lg">Dashboard</li>
          <li className="cursor-pointer text-lg">Books</li>
          <li className="cursor-pointer text-lg">Tags</li>
          <li className="cursor-pointer text-lg">Users</li>
          <li className="cursor-pointer text-lg">Orders</li>
        </ul>
      </div>
      <div>{children}</div>
    </main>
  );
}

export default layout;
