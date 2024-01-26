"use client";
import Pagginate from "@/utils/Pagginate";
import AllBlogs from "./_components/AllBlogs";
import WelcomeBanner from "./_components/WelcomeBanner";
import Editor from "../_components/Editor";
import { useSelector } from "react-redux";

const Home = () => {
  const post = useSelector((state) => state.post.blogs.data);
  return (
    <div className="grid grid-cols-1  p-5">
      {/* left container */}
      <div className="col-span-2">
        <WelcomeBanner />
        <AllBlogs />
      </div>
      <div>
        <Editor />
      </div>
      <div className="col-span-2 flex items-center justify-center my-5">
        {post?.length > 0 && <Pagginate />}
      </div>
    </div>
  );
};

export default Home;
