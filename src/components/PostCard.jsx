import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostActions from "./PostActions";
import PostCaption from "./PostCaption";
import CommentModal from "./CommentModal";

import { useState } from "react";

const PostCard = ({
  id,
  username,
  verified,
  profile,
  image,
  video,
  isVideo,
  likes,
  comments,
  reposts,
  shares,
  caption,
  isLiked,
  isSaved,
  isReposted,

  onLike,
  onComment,
  onShare,
  onSave,
  onRepost,

  commentsList = [],
}) => {
  const [showComments, setShowComments] = useState(false);

  const handleCommentClick = () => {
    setShowComments(true);
  };

  return (
    <>
      <div>
        <PostHeader username={username} verified={verified} profile={profile} />

        <PostMedia image={image} video={video} isVideo={isVideo} />

        <PostActions
          likes={likes}
          comments={comments}
          reposts={reposts}
          shares={shares}
          isLiked={isLiked}
          isSaved={isSaved}
          isReposted={isReposted}
          onLike={() => onLike(id)}
          onComment={handleCommentClick}
          onShare={() => onShare(id)}
          onSave={() => onSave(id)}
          onRepost={() => onRepost(id)}
        />

        <PostCaption username={username} caption={caption} />
      </div>

      <CommentModal
        isOpen={showComments}
        onClose={() => setShowComments(false)}
        comments={commentsList}
        onAddComment={(text) => onComment(id, text)}
      />
    </>
  );
};

export default PostCard;
