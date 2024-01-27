"use client";
import { XCircleIcon } from "lucide-react";
import TextEdit from "./TextEdit";
import { useDispatch, useSelector } from "react-redux";
import { hidePost } from "@/app/redux/PostSlice";

const Editor = () => {
  const postshow = useSelector((state) => state.post);
  const dispatch = useDispatch();

  return postshow?.show ? (
    <div className="w-screen h-screen flex items-center justify-center fixed bg-gray-950/50 border-4 left-0 top-0">
      <div
        onClick={() => dispatch(hidePost())}
        className="absolute top-4 right-5 p-2 text-white cursor-pointer hover:text-red-500 dark:hover:text-red-500"
      >
        <XCircleIcon size={30} />
      </div>
      <TextEdit />
    </div>
  ) : null;
};

export default Editor;
