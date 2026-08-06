import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostActions from "./PostActions";
import PostCaption from "./PostCaption";
const PostCard = ({
  username,
  verified,
  profile,
  image,
  likes,
  comments,
  reposts,
  shares,
  caption,
}) => {
  return (
    <div className="bg-white mb-6">
      <PostHeader username={username} verified={verified} profile={profile} />
      <PostMedia image={image} />
      <PostActions
        likes={likes}
        comments={comments}
        reposts={reposts}
        shares={shares}
      />
      <PostCaption username={username} caption={caption} />
    </div>
  );
};

export default PostCard;
