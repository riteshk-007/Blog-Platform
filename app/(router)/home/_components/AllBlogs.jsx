import BlogCard from "./BlogCard"


const AllBlogs = () => {
  return (
    <div className="dark:bg-gray-900 bg-gray-100 rounded-xl p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
    </div>
  )
}

export default AllBlogs
