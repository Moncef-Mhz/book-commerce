"use client";
import { useStateContext } from "@context/StoreContext";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const { Qty, totalQuantities } = useStateContext();
  const isAdmin = false;
  return (
    <div className="w-full h-[80px] px-5 items-center justify-between flex flex-row bg-slate-300 relative z-10  ">
      <Link href="/" className="text-3xl font-bold">
        Brand
      </Link>
      {/* desktop NavBar */}
      <ul className="md:flex items-center justify-between gap-10  hidden">
        <li className="cursor-pointer uppercase text-sm font-semibold">
          <Link href="/">Shop</Link>
        </li>
        <li className="cursor-pointer uppercase text-sm font-semibold">
          <Link href="/">Category</Link>
        </li>
        <li className="cursor-pointer uppercase text-sm font-semibold">
          <Link href="/">Contact</Link>
        </li>
      </ul>
      <div className="md:flex gap-5 items-center hidden">
        {isAdmin ? (
          <Link
            href="/admin"
            className="w-8 h-8 bg-indigo-600 rounded-full grid items-center justify-center text-white cursor-pointer"
          >
            A
          </Link>
        ) : (
          <div className="relative cursor-pointer">
            <Link href="/cart">
              <AiOutlineShoppingCart size={25} className="" />
            </Link>
            {totalQuantities > 0 ? (
              <div className="w-5 h-5 bg-red-500 rounded-full absolute -top-3 -right-3 flex items-center text-sm justify-center text-white ">
                {totalQuantities > 99 ? <>99</> : totalQuantities}
              </div>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
      <AiOutlineMenu
        size={25}
        className="cursor-pointer md:hidden"
        onClick={() => setOpenMenu((prev) => !prev)}
      />

      {/* Mobile NavBar */}
      <div
        className={
          openMenu
            ? "absolute w-[70%] h-screen bg-slate-300 top-0 right-0 -z-10  scale-x-full origin-[100%_50%] duration-200 overflow-x-hidden"
            : "absolute w-[70%] h-screen bg-slate-300 top-0 right-0 -z-10  scale-x-0 origin-[100%_50%] duration-200 overflow-x-hidden"
        }
      >
        <div className="mt-[80px] w-full flex flex-col ">
          <ul className=" items-center justify-between   flex flex-col  ">
            <li className="cursor-pointer uppercase text-sm font-semibold hover:bg-orange-700 duration-200 w-full py-6 text-center hover:text-white">
              <Link href="/">Shop</Link>
            </li>
            <li className="cursor-pointer uppercase text-sm font-semibold hover:bg-orange-700 duration-200 w-full py-6 text-center hover:text-white">
              <Link href="/">Category</Link>
            </li>
            <li className="cursor-pointer uppercase text-sm font-semibold hover:bg-orange-700 hover:text-white duration-200 w-full py-6 text-center">
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <div className="h-[1px] bg-black/20 mx-5"></div>
          {isAdmin ? (
            <div className="w-full text-center mt-4 cursor-pointer">
              <Link href="/admin" className="w-full h-full">
                Admin
              </Link>
            </div>
          ) : (
            <div className="relative cursor-pointer items-center flex justify-center mt-4">
              <Link href="/cart">
                <AiOutlineShoppingCart size={25} className="" />
              </Link>
              {totalQuantities > 0 ? (
                <div className="w-5 h-5 bg-red-500 rounded-full   flex items-center text-sm justify-center text-white ">
                  {totalQuantities > 99 ? <>99</> : totalQuantities}
                </div>
              ) : (
                <></>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
