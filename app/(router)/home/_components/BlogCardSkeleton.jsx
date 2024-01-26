const BlogCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 w-full rounded-xl shadow-md flex flex-col overflow-hidden"
        >
          <div className="w-full h-40 overflow-hidden bg-gray-300 animate-pulse"></div>
          <div className="py-3 px-5">
            <div className="h-4 bg-gray-300 animate-pulse"></div>
            <div className="h-4 mt-2 bg-gray-300 animate-pulse"></div>
          </div>
          <div className="flex w-full justify-between items-center text-xs text-gray-700 dark:text-gray-500 mb-2 px-4">
            <div className="h-4 w-1/4 bg-gray-300 animate-pulse"></div>
            <div className="h-4 w-1/4 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCardSkeleton;
