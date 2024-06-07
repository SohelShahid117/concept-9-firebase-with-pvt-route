import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Component/Root/Root";
import Products from "./Component/Products/Products";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Blog from "./Component/Blog/Blog";
import Login from "./Component/Login/Login";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import FirebaseProvider from "./Pages/FirebaseProvider/FirebaseProvider";
import Register from "./Component/Register/Register";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import Hero from "./Component/Hero/Hero";
import Book from "./Component/Book/Book";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "/",
      //   element: <Home></Home>,
      // },
      {
        path: "/",
        element: <Hero></Hero>,
        loader: () => fetch(`/books.json`),
      },
      {
        path: `/book/:id`,
        element: <Book></Book>,
        loader: () => fetch(`/books.json`),
      },
      {
        path: "/product",
        element: <Products></Products>,
      },
      {
        path: "/product:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
