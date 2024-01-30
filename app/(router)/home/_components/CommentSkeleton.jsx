import React from "react";

const CommentSkeleton = () => {
  return (
    <article className="p-6 mb-3 text-base dark:bg-gray-800 bg-gray-200 border-t border-gray-200 dark:border-gray-900 border">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-600 dark:text-gray-100 font-semibold">
            <span
              className="skeleton-box"
              style={{ width: "100px", height: "20px" }}
            ></span>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-100 ">
            <span
              className="skeleton-box"
              style={{ width: "80px", height: "20px" }}
            ></span>
          </p>
        </div>
        <button
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:bg-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
          type="button"
        >
          <span
            className="skeleton-box"
            style={{ width: "20px", height: "20px" }}
          ></span>
        </button>
      </footer>
      <p className="text-gray-800 dark:text-gray-200 font-semibold">
        <span
          className="skeleton-box"
          style={{ width: "100%", height: "20px" }}
        ></span>
      </p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline font-medium"
        >
          <span
            className="skeleton-box"
            style={{ width: "60px", height: "20px" }}
          ></span>
        </button>
      </div>
    </article>
  );
};

export default CommentSkeleton;
