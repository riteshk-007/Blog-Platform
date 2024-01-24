"use client";

const TextEdit = () => {
  return (
    <form className="flex items-center relative p-5 flex-col bg-indigo-800 rounded-md shadow-md dark:bg-gray-800">
      <div className="flex w-full">
        <label htmlFor="title" className="w-full text-white dark:text-gray-200">
          Title:
          <input
            type="text"
            name="title"
            id="title"
            className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
            placeholder="Title"
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
            className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
            placeholder="Description"
          ></textarea>
        </label>
      </div>
      <div className="flex w-full mt-4">
        <label htmlFor="image" className="w-full text-white dark:text-gray-200">
          Image:
          <input
            type="file"
            name="image"
            id="image"
            className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
            placeholder="Image"
            accept="image/*"
          />
        </label>
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
