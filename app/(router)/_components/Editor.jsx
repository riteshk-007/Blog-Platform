"use client";
import { XCircleIcon } from "lucide-react";
import TextEdit from "./TextEdit";

const Editor = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center fixed bg-gray-950/50 border-4 left-0 top-0">
      <div className="absolute top-4 right-5 p-2 dark:text-white cursor-pointer hover:text-red-500 dark:hover:text-red-500">
        <XCircleIcon size={30} />
      </div>
      <TextEdit />
    </div>
  );
};

export default Editor;
