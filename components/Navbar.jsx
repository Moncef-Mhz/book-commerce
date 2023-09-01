import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  const isAdmin = true;
  return (
    <div className="w-full h-[80px] px-5 items-center justify-between flex flex-row bg-slate-300">
      <h1 className="text-3xl font-bold">Brand</h1>
      <ul className="flex items-center justify-between gap-10 ">
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
      <div className="flex gap-5 items-center">
        {isAdmin ? (
          <Link
            href="/admin"
            className="w-8 h-8 bg-indigo-600 rounded-full grid items-center justify-center text-white cursor-pointer"
          >
            A
          </Link>
        ) : (
          <AiOutlineShoppingCart size={25} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
