import { useLoaderData, Link } from "react-router-dom";

const Blog = () => {
  const { posts } = useLoaderData();

  return (
    <>
      <h1>Blog</h1>

      <ul className="list-group">
        {posts.length > 0 ? (
          posts.map((item) => (
            <li key={item.id} className="list-group-item">
              <Link to={`/blog/${item.id}`}>
                {`${item.id} - `}
                {item.title}
              </Link>
            </li>
          ))
        ) : (
          <h1>No hay posts</h1>
        )}
      </ul>
    </>
  );
};

export default Blog;

export const loaderBlog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await res.json();

  if (!res.ok)
    throw {
      status: res.status,
      statusText: "No encontrado",
    };

  return { posts };
};
