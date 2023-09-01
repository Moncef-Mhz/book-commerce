import Product from "@components/Product";
import { product } from "@utils";
import Image from "next/image";
export default function Home() {
  return (
    <main className="m-5">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {product.map((item) => (
          <div className="flex flex-col gap-1  items-center" key={item.id}>
            <Image
              src={item.img}
              height={300}
              width={300}
              className=" h-[400px]"
              style={{ objectFit: "contain" }}
              // fill={true}
              loading="lazy"
            />
            <div className="flex px-7 py-2 w-full justify-between items-center">
              <h1 className="font-semibold text-lg">{item.title}</h1>
              <p className="font-semibold">{item.price}$</p>
            </div>
          </div>
        ))}
      </div>
      {/* <Product product={product} /> */}
    </main>
  );
}
