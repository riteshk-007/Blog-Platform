"use client";
import { createPost, hidePost } from "@/app/redux/PostSlice";
import { CldUploadWidget } from "next-cloudinary";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";

const TextEdit = () => {
  const { toast } = useToast();
  const [postDetail, setPostDetails] = useState({
    title: "",
    description: "",
    image: "",
    userId: "",
  });
  const [imageUploaded, setImageUploaded] = useState(false);
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.entity.data.id);

  const handleChnage = (e) => {
    setPostDetails({
      ...postDetail,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setPostDetails((prevDetails) => ({
      ...prevDetails,
      userId: userId,
    }));
  }, [userId]);
  const handleImageUpload = (imageData) => {
    if (!imageData.info.secure_url) {
      setImageUploaded(false);
      return;
    }
    setPostDetails({
      ...postDetail,
      image: imageData.info.secure_url,
    });
    setImageUploaded(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageUploaded) {
      return;
    }
    const serializablePostDetail = {
      title: postDetail.title,
      description: postDetail.description,
      userId: postDetail.userId,
      image: postDetail.image,
    };
    dispatch(createPost({ postDetail: serializablePostDetail }));
    dispatch(hidePost());
    toast({
      title: "Post created",
      description: "Your post has been created successfully",
      variant: "default",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center relative p-5 flex-col bg-indigo-800 rounded-md shadow-md dark:bg-gray-800"
    >
      <div className="flex w-full">
        <label htmlFor="title" className="w-full text-white dark:text-gray-200">
          Title:
          <input
            type="text"
            name="title"
            id="title"
            value={postDetail.title}
            onChange={handleChnage}
            className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
            placeholder="Title"
            required
          />
        </label>
      </div>
      <div className="flex w-full mt-4">
        <label
          htmlFor="description"
          className="w-full text-white dark:text-gray-200"
        >
          Description:
          <textarea
            name="description"
            id="description"
            rows="3"
            cols={50}
            value={postDetail.description}
            onChange={handleChnage}
            className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
            placeholder="Description"
            required
          ></textarea>
        </label>
      </div>
      <div className="flex w-full mt-4">
        <div className="flex w-full mt-4">
          {postDetail.title && postDetail.description ? (
            <CldUploadWidget
              options={{
                sources: ["local", "url", "unsplash"],
                multiple: false,
                maxFiles: 1,
              }}
              signatureEndpoint={"/api/sign-image"}
              onSuccess={handleImageUpload}
            >
              {({ open }) => {
                return (
                  <button
                    className="w-full px-3 py-2 text-white bg-gray-700 border dark:bg-indigo-600   rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-900 dark:hover:bg-indigo-700 disabled:opacity-25 transition ease-in-out duration-150"
                    onClick={open}
                  >
                    Upload Image
                  </button>
                );
              }}
            </CldUploadWidget>
          ) : null}
        </div>
      </div>
      <div className="flex w-full mt-4">
        <button
          type="submit"
          className="w-full px-3 py-2 text-white bg-black rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TextEdit;
