import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  const isAdmin = true;
  const cartitem = 0;
  return (
    <div className="w-full h-[80px] px-5 items-center justify-between flex flex-row bg-slate-300">
      <Link href="/" className="text-3xl font-bold">
        Brand
      </Link>
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
          <div className="relative">
            <AiOutlineShoppingCart size={25} />
            {cartitem > 0 ? (
              <div className="w-5 h-5 bg-red-500 rounded-full absolute -top-3 -right-3 flex items-center text-sm justify-center text-white ">
                {cartitem > 99 ? <>99</> : cartitem}
              </div>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
