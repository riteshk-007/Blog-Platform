"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import CommentSection from "../_components/CommentSection"
import { SquarePen, Trash } from "lucide-react"
import Dialog from "../../_components/Dialog"

const Post = () => {
    const [post, setPost] = useState({
        imgSrc: "/post.png",
        title: "Post Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        author: "Author Name",
        date: "Date",
      })

    const handleDelete = () => {
        // delete post
    }

    const handleUpdate = () => {
        // update post
    }

    return (
        <div className="flex flex-col bg-gray-100 dark:bg-gray-900 rounded-lg p-5 mt-5 mx-5">
            <div className="w-full overflow-hidden xl:h-[55vh]">
                <Image src={post.imgSrc} width={1780} height={500} alt="blog Image" loading='lazy' className="object-contain w-full h-full object-center rounded-lg" />
            </div>
            <h2 className="text-2xl font-bold mt-4">{post.title}</h2>
            <p className="text-gray-700 mt-2 dark:text-gray-200">{post.description}</p>
            <div className="flex justify-between items-center mt-4">
                <div>
                    <p className="text-sm dark:text-gray-300 text-gray-500">Author: {post.author}</p>
                    <p className="text-sm dark:text-gray-300 text-gray-500">Date: {post.date}</p>
                </div>
                <div className="flex items-center justify-center">
                    <Button onClick={handleUpdate} variant="update" className="m-2">
                        <SquarePen strokeWidth={3} size={17} />
                    </Button>
                    <span>
                        <Dialog onClick={handleDelete} item={ <Trash strokeWidth={3} size={17} />}/> 
                     </span>
                </div>
            </div>

            <CommentSection/>
        </div>
    )
}

export default Post