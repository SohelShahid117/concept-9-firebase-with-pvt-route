import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import { saveBooks } from "../../Utility/Utility";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Book = () => {
  const data = useLoaderData();
  console.log(data);
  //   const val = useParams();
  const { id } = useParams();
  console.log(id);
  const val = data.find((x) => x.id == id);
  console.log(val);
  const {
    book_image,
    author_name,
    book_summary,
    books_category,
    rating,
    title,
    tags,
    review_quantity,
    page_number,
    publisher_name,
    year_of_publishing,
  } = val;
  console.log(author_name);
  console.log(book_image);

  const handleRead = (val) => {
    console.log(val);
    saveBooks(val);
  };
  const handleWishlist = (val) => {
    console.log(val);
    saveBooks(val);
  };
  return (
    <section className="h-[100vh] my-10">
      <div className="container flex justify-center mx-auto flex-row lg:justify-around">
        <div className="flex items-center justify-center mt-8 lg:mt-0   bg-slate-50 p-20 rounded-3xl">
          <img
            src={book_image}
            alt=""
            className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            {title}
          </h1>
          <p className="text-2xl my-5 border-b-2 pb-2">By:{author_name}</p>
          <h2 className="text-xl font-semibold border-b-2 pb-2">
            {books_category}
          </h2>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            <span className="font-bold">Review:</span> {book_summary}
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start border-b-2 pb-5">
            <h2 className="text-2xl font-semibold">Tags:</h2>
            <p className="mr-4 text-lime-600 text-2xl bg-slate-100 rounded-3xl p-2">
              #{tags[0]}
            </p>
            <p className="mr-4 text-lime-600 text-2xl bg-slate-100 rounded-3xl p-2">
              #{tags[1]}
            </p>
          </div>
          <div className="flex flex-col justify-between mt-10">
            <p className="pr-10">
              <span className="pr-10">Number Of Pages:</span>
              {page_number}{" "}
            </p>
            <p className="pr-10">
              <span className="pr-10">Publisher:</span> {publisher_name}
            </p>
            <p className="pr-10">
              <span className="pr-10">year_of_publishing:</span>{" "}
              {year_of_publishing}{" "}
            </p>
            <p className="pr-10">
              <span className="pr-10">Rating :</span> {rating}
            </p>
          </div>
          <div className="card-actions mt-10">
            <button onClick={() => handleRead(val)} className="btn bg-lime-600">
              Read
            </button>
            <button
              onClick={() => handleWishlist(val)}
              className="btn bg-cyan-600"
            >
              WishList
            </button>
            {/* <ToastContainer /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
