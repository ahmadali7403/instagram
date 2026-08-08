import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

const CommentModal = ({ isOpen, onClose, comments, onAddComment }) => {
  const [commentText, setCommentText] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!commentText.trim()) return;

    onAddComment(commentText.trim());

    setCommentText("");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Bottom Sheet */}
      <div className="relative z-10 flex h-[65vh] w-full max-w-[500px] flex-col rounded-t-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="relative flex items-center justify-center border-b border-gray-200 py-4">
          <h2 className="text-base font-semibold text-black">Comments</h2>

          <button onClick={onClose} className="absolute right-4 cursor-pointer">
            <IoClose size={25} />
          </button>
        </div>

        {/* Comments */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {comments.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-semibold">No comments yet</p>

                <p className="mt-1 text-sm text-gray-500">
                  Be the first to comment.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {comments.map((comment) => (
                <div key={comment.id} className="flex items-start gap-3">
                  {/* Profile */}
                  <img
                    src={comment.profile}
                    alt={comment.username}
                    className="h-9 w-9 rounded-full object-cover"
                  />

                  {/* Comment Content */}
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="mr-2 font-semibold">
                        {comment.username}
                      </span>

                      {comment.text}
                    </p>

                    <div className="mt-1 flex items-center gap-4 text-xs text-gray-500">
                      <span>{comment.time}</span>

                      <button className="font-medium cursor-pointer">
                        Reply
                      </button>
                    </div>
                  </div>

                  {/* Like */}
                  <button className="mt-1 cursor-pointer text-gray-500">
                    <FaRegHeart size={15} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="border-t border-gray-200 bg-white p-3"
        >
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=2"
              alt="Your profile"
              className="h-9 w-9 rounded-full object-cover"
            />

            <div className="flex flex-1 items-center rounded-full bg-gray-100 px-4 py-2">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment..."
                className="w-full bg-transparent text-sm outline-none"
              />

              <button
                type="submit"
                disabled={!commentText.trim()}
                className={`ml-2 cursor-pointer ${
                  commentText.trim() ? "text-blue-500" : "text-gray-400"
                }`}
              >
                <FiSend size={20} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
