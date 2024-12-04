"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./blogcontent.css";

const SingleBlog = ({ accessToken, params }) => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      const API_URL = `https://backend.elderlycareplatform.com/api/v1/blogs/${params?.blogdetails}`;
      try {
        setLoading(true);
        const response = await axios.get(API_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken?.value}`,
          },
        });
        setBlog(response.data?.data);
      } catch (err) {
        setError(err.message || "Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  console.log(blog);
  if (loading)
    return (
      <div className="w-[100vw] flex justify-center items-center py-20">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  return (
    <div>
      <div className="flex justify-start py-3">
        <Link href="/">Home</Link>
        <span>&nbsp;/&nbsp;</span>
        <Link href="/blog">Blog</Link>
        <span>&nbsp;/&nbsp;</span>
        <Link className="font-semibold" href={`/blog/${params?.blogdetails}`}>
          {params?.blogdetails}
        </Link>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold py-3">{blog?.title}</h2>
        <p className="text-sm pb-4">{formatDate(blog?.created_at)}</p>
        <Image
          className="w-auto h-[60vh] mx-auto"
          src={blog?.image}
          height={500}
          width={800}
          alt=""
        />
        <div
          className="blog-content mt-6"
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        />
      </div>
    </div>
  );
};

export default SingleBlog;
