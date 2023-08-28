import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <div className="w-full h-[80px] px-5 items-center justify-between flex flex-row bg-slate-300">
      <h1 className="text-3xl font-bold">Brand</h1>
      <ul className="flex items-center justify-between gap-10 ">
        <li className="cursor-pointer uppercase text-sm font-semibold">Shop</li>
        <li className="cursor-pointer uppercase text-sm font-semibold">
          Category
        </li>
        <li className="cursor-pointer uppercase text-sm font-semibold">
          About us
        </li>
      </ul>
      <AiOutlineShoppingCart size={25} />
    </div>
  );
}

export default Navbar;
