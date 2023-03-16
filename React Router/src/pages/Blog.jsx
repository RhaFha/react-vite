import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   setSearchParams({ filter: "ignacio" });
  // }, [searchParams]);

  const hendleChange = (e) => {
    let filter = e.target.value;

    setSearchParams({ filter });
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <h1>Blog</h1>
      <input
        type="text"
        name=""
        onChange={(e) => hendleChange(e)}
        className="form-control my-4"
        value={searchParams.get("filter") || ""}
      />
      <ul className="list-group">
        {data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLocaleLowerCase());
          })
          .map((item) => (
            <li key={item.id} className="list-group-item">
              <Link to={`/blog/${item.id}`}>
                {`${item.id} - `}
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Blog;
