"use client";
import {
  createComment,
  deleteComment,
  getComments,
} from "@/app/redux/CommentSlice";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentSkeleton from "./CommentSkeleton";
import { Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CommentSection = ({ userId, postId, post }) => {
  const { toast } = useToast();
  const [commentValue, setCommentValue] = useState({
    comment: "",
    userId: "",
    postId: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setCommentValue((prevValue) => ({
      ...prevValue,
      userId: userId,
      postId: postId,
    }));
  }, [userId, postId]);

  const handleClick = () => {
    if (
      commentValue.comment === "" ||
      commentValue.userId === "" ||
      commentValue.postId === ""
    )
      return;
    dispatch(createComment(commentValue)).then(() => {
      dispatch(getComments(postId));
    });
    setCommentValue({
      comment: "",
    });
    toast({
      title: "commented successfully",
      description: "commented successfully",
      variant: "default",
    });
  };

  const handleCommentChange = (e) => {
    setCommentValue((prevValue) => ({
      ...prevValue,
      comment: e.target.value,
    }));
  };
  useEffect(() => {
    dispatch(getComments(postId));
  }, [dispatch, postId]);

  const commentDelete = (e) => {
    dispatch(deleteComment(e)).then(() => {
      dispatch(getComments(postId));
      toast({
        title: "Comment deleted successfully",
        description: "Comment deleted successfully",
        variant: "default",
      });
    });
  };
  const comments = useSelector((state) => state?.commnet?.comments);
  const loading = useSelector((state) => state?.commnet?.loading);
  return (
    <div className="w-full md:w-1/2 mx-auto my-10">
      <div className="grid w-full gap-2">
        <Textarea
          placeholder="Type your message here."
          value={commentValue.comment}
          onChange={handleCommentChange}
        />
        <Button onClick={handleClick}>Send Comment</Button>
      </div>
      <div>
        <h3 className="text-2xl font-bold mt-4">Comments</h3>
        {loading ? (
          <CommentSkeleton />
        ) : comments?.length > 0 ? (
          comments
            ?.map((comment) => (
              <article
                key={comment.id}
                className="p-6 mb-3 text-base dark:bg-gray-800 bg-gray-200 border-t border-gray-200 dark:border-gray-900 border"
              >
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-600 dark:text-gray-100 font-semibold">
                      {comment?.user?.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-100 ">
                      <time pubdate="true" dateTime={comment?.createdAt}>
                        {new Date(comment?.createdAt).toLocaleString(
                          undefined,
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </time>
                    </p>
                  </div>
                  {post?.userId == userId && (
                    <button
                      className="inline-flex relative items-center p-2 text-sm font-medium text-center text-gray-500 dark:bg-gray-900 bg-white rounded-lg dark:hover:bg-red-700 hover:bg-red-500 hover:text-white"
                      type="button"
                      onClick={() => commentDelete(comment?.id)}
                    >
                      <Trash2 size={15} />
                    </button>
                  )}
                </footer>
                <p className="text-gray-800 dark:text-gray-200 font-semibold">
                  {comment?.content}
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center text-sm text-gray-500 hover:underline font-medium"
                  >
                    <svg
                      className="mr-1.5 w-3.5 h-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                      />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
            ))
            .reverse()
        ) : (
          <div className="flex w-full items-center justify-center">
            <p className="text-gray-800 dark:text-gray-200 font-semibold">
              No comments yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
