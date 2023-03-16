import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => {
  const { blogId } = useParams();

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );

  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="container">
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <Link className="btn btn-primary" to="/blog">
        Vorver
      </Link>
    </div>
  );
};

export default BlogDetails;
