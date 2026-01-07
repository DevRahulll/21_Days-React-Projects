import { useLocation, useNavigate } from "react-router-dom";
import useGlobalContext from "../hooks/useGlobalContext";
import axios from "axios";
import { useEffect } from "react";

export default function AddBlog() {
  const { formData, setFormData, setIsEdit, isEdit } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSaveBlogToDatabase() {
    const response = isEdit
      ? await axios.put(
          `http://localhost:5000/api/blogs/update/${location.state.getCurrentBlogItem._id}`,
          {
            title: formData.title,
            description: formData.description,
          }
        )
      : await axios.post("http://localhost:3000/api/blogs/add", {
          title: formData.title,
          description: formData.description,
        });

    const result = await response.data;
    if (result) {
      setIsEdit(false);
      setFormData({
        title: "",
        description: "",
      });
      navigate("/");
    }
  }

  useEffect(() => {
    console.log(location);
    if (location.state) {
      const { getCurrentBlogItem } = location.state;
      setIsEdit(true);
      setFormData({
        title: getCurrentBlogItem.title,
        description: getCurrentBlogItem.description,
      });
    }
  }, [location]);

  return (
    <div className="p-10 mx-auto max-w-150">
      <h1 className="text-4xl font-semibold mb-10">
        {isEdit ? "Edit a Blog" : "Add a Blog"}
      </h1>
      <div className="flex flex-col w-100">
        <input
          className="w-100 bg-slate-800 text-gray-300 rounded-lg placeholder:text-md text-xl px-8 py-2 border-none outline-none active:ring active:ring-blue-300 mb-2"
          name="title"
          placeholder="Enter a Blog title"
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
        />

        <textarea
          className="w-100 bg-slate-800 text-gray-300 rounded-lg placeholder:text-md text-xl px-8 py-2 border-none outline-none active:ring active:ring-blue-300 h-40 mb-5"
          name="description"
          placeholder="Enter Blog description"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />

        <button
          className="px-8 py-2 rounded-lg text-xl font-medium bg-emerald-600 hover:bg-emerald-500 mx-auto w-[50%] cursor-pointer active:scale-95"
          onClick={handleSaveBlogToDatabase}
        >
          {isEdit ? "Edit Blog" : "Add Blog"}
        </button>
      </div>
    </div>
  );
}
