"use client";
import axios from "axios";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const BlogTable = ({ accessToken }) => {
  const [blogs, setBlogs] = useState([]);
  console.log(88, blogs);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const fetchBlogs = async () => {
      const API_URL = "https://backend.elderlycareplatform.com/api/v1/blogs";

      try {
        setLoading(true);
        const response = await axios.get(API_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken?.value}`,
          },
        });

        // Update state
        setBlogs(response?.data?.data);
      } catch (err) {
        setError(err.message || "Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const API_URL = `https://backend.elderlycareplatform.com/api/v1/blogs/${id}`;
    if (deleting) return;

    try {
      setDeleting(true);
      const response = await axios.delete(API_URL, {
        headers: {
          Authorization: `Bearer ${accessToken?.value}`,
        },
      });

      const blogResult = await response.json();
      setBlogs((prevBlogs) => [
        ...prevBlogs,
        prevBlogs.filter((blog) => blog._id != id),
      ]);
      toast.success("Blog deleted successfully");
    } catch (err) {
      console.error("Error deleting blog:", err.message);
      toast.error(`Failed to delete blog: ${err.message}`);
    } finally {
      setDeleting(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  if (loading)
    return (
      <div className="w-[100vw] flex justify-center items-center py-20">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  if (error) return;
  <div className="w-[100vw] flex justify-center items-center py-20">
    <p className="text-xl font-semibold">Error: {error}</p>
  </div>;
  return (
    <div>
      <div className="w-full overflow-x-auto">
        <table
          className="w-full text-left rounded w-overflow-x-auto "
          cellspacing="0"
        >
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Image
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Title
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Created Date
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Actions
              </th>
            </tr>
            {blogs?.map((blog) => (
              <tr key={blog?._id}>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  <Image
                    className="w-auto h-full max-h-[250px]"
                    src={blog?.image}
                    height={300}
                    width={200}
                    alt=""
                  />
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {blog?.title}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {formatDate(blog?.created_at)}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  <div
                    onClick={() => handleDelete(blog?._id)}
                    className={`cursor-pointer ${
                      deleting ? "text-gray-400" : "text-red-500"
                    }`}
                  >
                    <Trash2 />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogTable;
