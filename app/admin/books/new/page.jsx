"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

function NewBook() {
  //Book states
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [categories, setcategories] = useState("");
  const [price, setprice] = useState(0);
  const [author, setauthor] = useState("");
  const [job, setjob] = useState("");
  // const [image, setImage] = useState([]);

  // cloudinary handler
  // const handleImage = (e) => {
  //   const file = e.target.files[0];
  //   setFileToBase(file);
  // };
  // const setFileToBase = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setImage(reader.result);
  //   };
  // };

  //adding books to DB
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      let slug = title.replace(" ", "-");
      let category = categories.split(",");

      const response = await fetch("/api/admin/books/new", {
        method: "POST",
        body: JSON.stringify({
          title,
          slug,
          category,
          description,
          price,
          author,
          job,
          // image,
        }),
      });
      if (response.ok) {
        setTitle("");
        setauthor("");
        setcategories("");
        setdescription("");
        setjob("");
        setprice(0);
        // setImage("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" w-full bg-slate-100 h-full p-4">
      <div className="flex flex-row w-full  h-full border-b mb-2 pb-2  items-center justify-between">
        <Link href="/admin/books">
          <AiOutlineArrowLeft size={25} />
        </Link>
        <h1 className="text-lg font-bold uppercase cursor-default">
          Add new Book
        </h1>
      </div>
      <form className="flex flex-col gap-4" onSubmit={submitHandler}>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-lg">
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-2 rounded outline-indigo-500 "
            placeholder="ex: Rich dad poor dad"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-lg">
            Description:
          </label>
          <textarea
            className="px-4 py-2 rounded outline-indigo-500 "
            required
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="ex: Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-lg">
            Category:
          </label>
          <input
            type="text"
            value={categories}
            onChange={(e) => setcategories(e.target.value)}
            className="px-4 py-2 rounded outline-indigo-500 "
            placeholder="ex: finance,self improvment"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-lg">
            Price:
          </label>
          <input
            type="Number"
            className="px-4 py-2 rounded outline-indigo-500 "
            value={price}
            onChange={(e) => setprice(e.target.value)}
            placeholder="ex: 10"
            min="0"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-lg">
            Author:
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            className="px-4 py-2 rounded outline-indigo-500 "
            placeholder="ex: HAL ELROD"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-lg">
            Author Job:
          </label>
          <input
            type="text"
            value={job}
            onChange={(e) => setjob(e.target.value)}
            className="px-4 py-2 rounded outline-indigo-500 "
            placeholder="ex: Writer"
            required
          />
        </div>
        {/* <div className="flex flex-col gap-2 relative">
          <label htmlFor="" className="text-lg">
            Book image:
          </label>
          <input
            type="file"
            // file={image}
            // id="formupload"
            onChange={handleImage}
            className="px-4 py-2 rounded outline-0"
            placeholder="ex: Writer"
            required
          />
        </div> */}
        <div className="mt-2 flex items-center justify-end">
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded text-lg"
            onSubmit={submitHandler}
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewBook;
