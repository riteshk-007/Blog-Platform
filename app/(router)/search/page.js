"use client";

import { searchPost } from "@/app/redux/PostSlice";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BlogCard from "../home/_components/BlogCard";
import BlogCardSkeleton from "../home/_components/BlogCardSkeleton";

const Search = () => {
  const search = useSearchParams();
  const searchQuery = search ? search?.get("q") : null;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchPost(searchQuery));
  }, [dispatch, searchQuery]);

  const searchItem = useSelector((state) => state.post.blogs.data);
  const loading = useSelector((state) => state.post.loading);

  if (loading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
        <BlogCardSkeleton />
      </div>
    );
  return (
    <div className="p-2">
      <div className="dark:bg-gray-900 bg-gray-100 rounded-xl p-5 mt-5 text-start">
        <h2 className="text-lg md:text-xl text-gray-500 dark:text-gray-400 ">
          You searched for:{" "}
          <span className="text-blue-500 dark:text-blue-300 capitalize">
            {searchQuery}
          </span>
        </h2>
      </div>
      {searchItem && searchItem.length > 0 ? (
        <div className="dark:bg-gray-900 bg-gray-100 rounded-xl p-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
          {searchItem.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      ) : (
        <div className="dark:bg-black bg-gray-100 rounded-xl p-5 flex justify-center mt-5 items-center w-full h-screen">
          <h1 className="text-2xl text-gray-500 text-center dark:text-gray-400 font-semibold">
            {
              "Oops! We couldn't find any blogs matching your search. Try using different keywords or check back later!"
            }
          </h1>
        </div>
      )}
    </div>
  );
};

export default Search;
