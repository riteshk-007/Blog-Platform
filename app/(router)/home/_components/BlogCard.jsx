import Image from "next/image"
import Link from "next/link"

const BlogCard = () => {
  return (
    <Link href={"/home/1"}  className=" bg-white w-full rounded-xl shadow-md  flex flex-col overflow-hidden">
          <div className="w-full h-40 overflow-hidden">
            <Image src={"/panda.png"} width={80} height={70} alt="blog Image"  className="m-2"/>
          </div>
                <h3 className="font-bold capitalize truncate overflow-hidden w-full py-3 px-5"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
        <div className="flex w-full justify-between items-center text-xs text-gray-700 mb-2 px-4">
            <p> Author : Ritesh </p>
             <p>Date : 17/01/2024 </p>
        </div>
    </Link>
  )
}

export default BlogCard
