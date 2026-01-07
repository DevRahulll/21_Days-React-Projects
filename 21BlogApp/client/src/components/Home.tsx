import { useNavigate } from "react-router-dom";
import useGlobalContext from "../hooks/useGlobalContext";
import axios from "axios";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import type { BlogItemTypes } from "../context/BlogContext";

export default function Home() {
  const { blogList, setBlogList, loading, setLoading } = useGlobalContext();
  const navigate = useNavigate();

  async function fetchListBlogs() {
    setLoading(true);
    const response = await axios.get<{ blogList: BlogItemTypes[] }>(
      "http://localhost:3000/api/blogs"
    );
    const result = await response.data;

    if (result && result.blogList && result.blogList.length) {
      setBlogList(result.blogList);
      setLoading(false);
    } else {
      setLoading(false);
      setBlogList([]);
    }
  }

  async function handleDeleteBlog(getCurrentId: string) {
    const response = await axios.delete(
      `http://localhost:3000/api/blogs/delete/${getCurrentId}`
    );
    const result = await response.data;

    if (result?.message) {
      fetchListBlogs();
      //navigate(0) we can do this or call function once again
    }
  }

  function handleEdit(getCurrentBlogItem: BlogItemTypes) {
    console.log(getCurrentBlogItem);
    navigate("/add-blog", { state: { getCurrentBlogItem } });
  }

  useEffect(() => {
    fetchListBlogs();
  }, []);

  return (
    <div className="m-10 w-[90%]">
      <h1 className="text-4xl text-emerald-400 font-bold tracking-wider mt-10 mb-10">
        Blog List
      </h1>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {blogList && blogList.length ? (
            blogList.map((blogItem: BlogItemTypes, index: number) => (
              <div
                key={index}
                className="border border-emerald-100 w-100 m-2 p-2"
              >
                <p>{blogItem.title}</p>
                <p>{blogItem.description}</p>

                <div className="flex gap-4 mt-4 items-center justify-center">
                  <FaEdit onClick={() => handleEdit(blogItem)} size={30} />
                  <FaTrash
                    onClick={() => handleDeleteBlog(blogItem._id)}
                    size={30}
                  />
                </div>
              </div>
            ))
          ) : (
            <h3>No Blogs Added</h3>
          )}
        </div>
      )}
    </div>
  );
}
