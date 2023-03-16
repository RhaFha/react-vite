import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>{error.statusText || error.message} </h1>
      <Link to="/">Volver</Link>
    </div>
  );
};

export default NotFound;
