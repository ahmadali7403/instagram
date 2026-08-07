import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostActions from "./PostActions";
import PostCaption from "./PostCaption";
// import PostTime from "./PostTime";

const PostCard = ({
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
  // time,
}) => {
  return (
    <div className="bg-white mb-5">
      <PostHeader username={username} verified={verified} profile={profile} />

      <PostMedia image={image} video={video} isVideo={isVideo} />

      <PostActions
        likes={likes}
        comments={comments}
        reposts={reposts}
        shares={shares}
      />

      <PostCaption username={username} caption={caption} />

      {/* <PostTime time={time} /> */}
    </div>
  );
};

export default PostCard;
