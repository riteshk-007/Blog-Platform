"use client";
import { Button } from "@/components/ui/button";
import { SquarePen, Trash } from "lucide-react";
import React from "react";
import Dialog from "../_components/Dialog";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserPost, getUser } from "@/app/redux/UserSignupLoginSlice";
import BlogCard from "../home/_components/BlogCard";
import BlogCardSkeleton from "../home/_components/BlogCardSkeleton";
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const user = useSelector((state) => state.user.entity.data);
  const loading = useSelector((state) => state.user.loading);

  const handleDeleteUser = () => {
    dispatch(deleteUserPost(user.id));
    router.push("/signup");
  };
  return (
    <div className="flex p-3 flex-col items-center justify-center min-h-screen py-2 dark:bg-gradient-to-r dark:from-gray-800  dark:to-black bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="max-w-4xl w-full space-y-8 dark:bg-black bg-white p-10 rounded-xl shadow-lg">
        <div className="items-center justify-center w-full ">
          <div className="flex flex-col w-full items-center justify-center ">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200">
              {user?.name}
            </h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              {user?.email}
            </p>
            <div className="mt-2 text-lg text-gray-600 dark:text-gray-400 bg-white dark:bg-black p-4 rounded shadow flex items-center flex-col justify-center">
              <h2 className="font-bold text-xl mb-2">Account Information</h2>
              <p>
                <span className="font-semibold">Account created on: </span>
                {new Date(user?.createdAt).toLocaleString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
            </div>
            <div className="mt-4 flex justify-center items-center gap-5">
              <Button variant="update">
                <SquarePen strokeWidth={3} size={17} />
              </Button>
              <span>
                <Dialog
                  onYes={handleDeleteUser}
                  item={<Trash strokeWidth={3} size={17} />}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="w-full dark:bg-black bg-transparent rounded-xl p-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
          <BlogCardSkeleton />
        </div>
      ) : (
        <div className="dark:bg-gray-900 bg-transparent rounded-xl p-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
          {user?.posts?.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
