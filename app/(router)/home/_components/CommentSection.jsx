import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"


const CommentSection = () => {
  return (
    <div className="w-full md:w-1/2 mx-auto my-10">
          <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send Comment</Button>
    </div>
        <div>
            <h3 className="text-2xl font-bold mt-4">Comments</h3>
            <article
                      
                      className="p-6 mb-3 text-base bg-gray-200 border-t border-gray-200 border"
                    >
                      <footer className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <p className="inline-flex items-center mr-3 text-sm text-gray-600 font-semibold">
                           Ritesh
                          </p>
                          <p className="text-sm text-gray-600 ">
                            {/* <time pubdate="true" dateTime={comment.date}>
                              {new Date(comment?.date).toLocaleDateString()}
                            </time> */}
                            12/12/2021
                          </p>
                        </div>
                        <button
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                          type="button"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 3"
                          >
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                          </svg>
                        </button>
                      </footer>
                      <p className="text-gray-800 font-semibold">
                        nice post and good work
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
        </div>
    </div>
  )
}

export default CommentSection
