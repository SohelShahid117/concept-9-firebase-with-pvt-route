import React, { useEffect, useState } from "react";
//import Book from "../Book/Book";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
// import { FaRegStar } from "react-icons/fa";

const Books = ({ book }) => {
  console.log(book);
  const { id, book_image, title, author_name, books_category, rating, tags } =
    book;
  return (
    <Link to={`/book/${id}`}>
      <div className="card w-82 bg-base-100 shadow-xl border p-1  border-2 rounded-lg my-5 grow flex-wrap align-baseline">
        <figure className="px-10 pt-10 bg-slate-100 p-10">
          <img
            // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            src={book_image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="flex my-5">
          <h2 className="mr-4 text-lime-600 text-2xl bg-slate-100 rounded-3xl p-2">
            {tags[0]}
          </h2>
          <h2 className="mr-4 text-lime-600 text-2xl bg-slate-100 rounded-3xl p-2">
            {tags[1]}
          </h2>
        </div>
        <div className="card-body">
          {/* <h2 className="card-title">{books[0].title}</h2> */}
          <div className="border-b-2 border-dashed py-5">
            <h2 className="text-4xl  ">{title}</h2>
            <p className="text-xl font-semibold">By:{author_name}</p>
          </div>
          <div className="card-actions justify-between text-lg">
            <h2 className="mr-12">{books_category}</h2>
            <h2 className="flex items-center pr-5">
              {rating}
              <FaRegStar className="ml-2" />
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Books;
