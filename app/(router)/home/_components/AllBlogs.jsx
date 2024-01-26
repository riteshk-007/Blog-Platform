"use client";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import { useState, useEffect } from "react";
import { getAllPosts } from "@/app/redux/PostSlice";
import BlogCardSkeleton from "./BlogCardSkeleton";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const blogPOST = useSelector((state) => state.post.blogs.data);
  const loading = useSelector((state) => state.post.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    setBlogs(blogPOST);
  }, [blogPOST]);

  if (loading) {
    return (
      <div className="dark:bg-gray-900 bg-gray-100 rounded-xl p-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        <BlogCardSkeleton />
      </div>
    );
  }

  return (
    <>
      {blogs && blogs.length > 0 ? (
        <div className="dark:bg-gray-900 bg-gray-100 rounded-xl p-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      ) : (
        <div className="dark:bg-gray-900 bg-gray-100 rounded-xl p-5 flex justify-center mt-5 items-center w-full h-full">
          <h1 className="text-2xl text-gray-500 dark:text-gray-400 font-semibold">
            No Blogs Found
          </h1>
        </div>
      )}
    </>
  );
};

export default AllBlogs;
