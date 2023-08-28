import Product from "@components/Product";
import { product } from "@utils";
import Image from "next/image";
export default function Home() {
  return (
    <main className="">
      <div className="">
        {product.map((item) => (
          <Image src={item.img} height={300} width={300} />
        ))}
      </div>
      {/* <Product product={product} /> */}
    </main>
  );
}
