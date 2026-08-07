import PostCard from "./PostCard";

import { posts } from "../data/data";

const Feed = () => {
  return (
    <div>
      {posts.map((post) => (
        <>
          <PostCard
            key={post.id}
            username={post.username}
            verified={post.verified}
            profile={post.profile}
            image={post.image}
            likes={post.likes}
            comments={post.comments}
            reposts={post.reposts}
            shares={post.shares}
            caption={post.caption}
            time={post.time}
          />
        </>
      ))}
    </div>
  );
};

export default Feed;
