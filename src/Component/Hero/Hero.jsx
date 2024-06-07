import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Books from "../Books/Books";

const Hero = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className="hero min-h-screen bg-base-200 w-[80%] mx-auto rounded-2xl p-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-[50%]">
            <img
              // src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              src={data[0].book_image}
              className="max-w-sm rounded-lg shadow-2xl"
              width={300}
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold py-10">
              Books To Freshen Up Your Bookshelf
            </h1>
            {/* <p className="py-6">{data[0].book_summary}</p> */}
            <Link
              to="/listedBooks"
              className="btn bg-lime-600 text-xl text-white"
            >
              View the list
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto my-10 text-center">
        <h2 className="text-5xl font-bold">Books</h2>
      </div>

      <div className="grid flex grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto flex-wrap align-baseline">
        {data.map((book) => (
          <Books key={book.id} book={book}></Books>
        ))}
      </div>
    </>
  );
};

export default Hero;
