"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CommentSection from "../_components/CommentSection";
import { Trash } from "lucide-react";
import Dialog from "../../_components/Dialog";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getSignlePostDetails } from "@/app/redux/PostSlice";
import Link from "next/link";
import EditProfile from "../../_components/EditProfile";
import { updatePostParagraph, updateTitle } from "@/app/redux/UpdateSlice";

const Post = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [para, setPara] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getSignlePostDetails(id));
  }, [id, dispatch]);

  const handleDelete = () => {
    dispatch(deletePost(id));
    router.push("/");
  };

  const post = useSelector((state) => state?.post?.post?.data);
  const loading = useSelector((state) => state?.post?.loading);
  const userId = useSelector((state) => state?.user?.entity?.data?.id);

  // update Tilte
  useEffect(() => {
    setTitle(post?.title);
  }, [post?.title]);

  const udateTitle = () => {
    dispatch(updateTitle({ id: post?.id, title: title }));
  };
  // update Paragraph
  useEffect(() => {
    setPara(post?.content);
  }, [post?.content]);
  const udatePara = () => {
    dispatch(updatePostParagraph({ id: post?.id, content: para }));
  };
  if (loading) {
    return (
      <div className="flex flex-col bg-gray-100 dark:bg-gray-900 rounded-lg p-5 mt-5 mx-5 animate-pulse">
        <div className="w-full overflow-hidden xl:h-[55vh] bg-gray-300 dark:bg-gray-700"></div>
        <h2 className="text-2xl font-bold mt-4 bg-gray-300 dark:bg-gray-700 p-5"></h2>
        <p className="text-gray-700 mt-2 dark:text-gray-200 bg-gray-300 dark:bg-gray-700 p-5"></p>
        <div className="flex justify-between items-center mt-4 p-5">
          <div>
            <p className="text-sm dark:text-gray-300 text-gray-500 bg-gray-300 dark:bg-gray-700 py-5 px-10"></p>
            <p className="text-sm dark:text-gray-300 text-gray-500 bg-gray-300 dark:bg-gray-700 py-5 px-10"></p>
          </div>
          <div className="flex items-center justify-center">
            <div className="m-2 bg-gray-300 dark:bg-gray-700 p-5"></div>
            <div className="m-2 bg-gray-300 dark:bg-gray-700 p-5"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-gray-900 rounded-lg p-5 mt-5 mx-5">
      <div className="w-full overflow-hidden xl:h-[55vh]">
        <Image
          src={post?.image}
          width={1780}
          height={500}
          alt="blog Image"
          loading="lazy"
          className="object-contain w-full h-full object-center rounded-lg"
        />
      </div>
      {post?.userId === userId && (
        <div className="flex items-center justify-center mt-5">
          <span>
            <Dialog
              item={<Trash strokeWidth={3} size={17} />}
              onYes={handleDelete}
            />
          </span>
        </div>
      )}
      <h2 className="text-2xl font-bold mt-4 flex items-center justify-start">
        {post?.title}{" "}
        {post?.userId === userId && (
          <span className="m-3 text-sm font-normal flex items-center justify-between px-2 dark:bg-gray-800  bg-gray-200 rounded-lg ">
            <p>Edit Title:</p>
            <EditProfile
              name={"Title"}
              value={title}
              updateInfo={udateTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
          </span>
        )}
      </h2>
      <div className="text-gray-700 mt-2 dark:text-gray-200 flex-col flex">
        {post?.userId === userId && (
          <span className="m-3 text-sm font-normal flex items-center justify-between px-2 w-44 dark:bg-gray-800  bg-gray-200 rounded-lg ">
            <p>Edit Paragraph: </p>
            <EditProfile
              name={"Paragraph"}
              value={para}
              onChange={(e) => setPara(e.target.value)}
              updateInfo={udatePara}
            />
          </span>
        )}
        {post?.content}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-sm dark:text-gray-300 text-gray-500">
            Author: {post?.user?.name}
          </p>
          <p className="text-sm dark:text-gray-300 text-gray-500">
            Date:{" "}
            {new Date(post?.createdAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {userId ? (
        <CommentSection postId={post?.id} userId={userId} post={post} />
      ) : (
        <div className="flex w-full items-center justify-center flex-col">
          <p
            className=" dark:text-gray-300 text-gray-500 font-semibold text-lg md:text-2xl"
            style={{ textAlign: "center" }}
          >
            Please login to view the comment section.
          </p>
          <Link
            href={"/signup"}
            className="text-gray-700 dark:text-gray-200 font-semibold underline"
            style={{ textAlign: "center" }}
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Post;
