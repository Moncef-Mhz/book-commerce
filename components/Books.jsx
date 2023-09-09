import Image from "next/image";
import Link from "next/link";
import React from "react";

function Books({ item }) {
  return (
    <>
      <Link
        className="flex flex-col gap-1  items-center"
        href={`/${item.slug}`}
        key={item._id}
      >
        <Image
          src={item.image.url}
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
      </Link>
    </>
  );
}

export default Books;
