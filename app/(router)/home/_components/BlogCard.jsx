import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <Link
      href={`/home/${blog?.id}`}
      className=" bg-white dark:bg-black w-full rounded-xl shadow-md  flex flex-col overflow-hidden"
    >
      <div className="h-40  flex items-center justify-center overflow-hidden">
        <Image
          src={blog?.image}
          width={380}
          height={140}
          alt={blog?.title}
          objectFit="fill"
        />
      </div>
      <h3 className="font-bold capitalize truncate overflow-hidden w-full py-3 px-5">
        {blog?.title}
      </h3>
      <div className="flex w-full justify-between items-center text-xs text-gray-700 dark:text-gray-500 mb-2 px-4">
        <p> Author : {blog?.user?.name}</p>
        <p>
          Date :
          {new Date(blog?.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
