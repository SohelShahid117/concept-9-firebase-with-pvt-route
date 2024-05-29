import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h2 className="text-4xl">404</h2>
      {/* <p>
        Sorry, an unexpected error has occurredddddddddddddddddddddddddddddddd.
      </p> */}
      <p className="text-5xl font-bold">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="btn">Go Home</button>
      </Link>
    </div>
  );
}
