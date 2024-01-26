"use client";
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import { useState } from "react";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const blogPOST = useSelector((state) => state.post.blogs);
  console.log(blogPOST);
  return (
    <div className="dark:bg-gray-900 bg-gray-100 rounded-xl p-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
      <BlogCard />
    </div>
  );
};

export default AllBlogs;
