import { useLoaderData, Link } from "react-router-dom";

const Post = () => {
  const { post } = useLoaderData();

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/blog" className="btn-outline-secondary">
        Volver
      </Link>
    </>
  );
};

export default Post;

export const loaderPost = async ({ params }) => {
  console.log(params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  if (!res.ok)
    throw {
      status: res.status,
      statusText: "No encontrdo",
    };

  return { post };
};
