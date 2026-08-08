import { useState } from "react";
import PostCard from "./PostCard";
import { posts } from "../data/data";

const Feed = () => {
  const [feedPosts, setFeedPosts] = useState(
    posts.map((post) => ({
      ...post,
      isLiked: false,
      isSaved: false,
      isReposted: false,
    })),
  );

  const [comments, setComments] = useState({});

  const handleLike = (id) => {
    setFeedPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: updateCount(post.likes, post.isLiked ? -1 : 1),
            }
          : post,
      ),
    );
  };

  const handleSave = (id) => {
    setFeedPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              isSaved: !post.isSaved,
            }
          : post,
      ),
    );
  };

  // =========================
  // Repost
  // =========================

  const handleRepost = (id) => {
    setFeedPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              isReposted: !post.isReposted,
              reposts: updateCount(post.reposts, post.isReposted ? -1 : 1),
            }
          : post,
      ),
    );
  };

  const handleComment = (id, text) => {
    if (!text || !text.trim()) return;

    const newComment = {
      id: Date.now(),
      username: "ahmad ali",
      profile: "https://i.pravatar.cc/150?img=2",
      text: text.trim(),
      time: "now",
    };

    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), newComment],
    }));

    setFeedPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: updateCount(post.comments, 1),
            }
          : post,
      ),
    );
  };

  const handleShare = async (id) => {
    const post = feedPosts.find((item) => item.id === id);

    if (!post) return;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `${post.username}'s Post`,
          text: post.caption,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Post link copied!");
      }

      setFeedPosts((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                shares: updateCount(item.shares, 1),
              }
            : item,
        ),
      );
    } catch (error) {
      console.log("Share cancelled:", error);
    }
  };

  return (
    <div>
      {feedPosts.map((post) => (
        <PostCard
          key={post.id}
          {...post}
          onLike={handleLike}
          onComment={handleComment}
          onShare={handleShare}
          onSave={handleSave}
          onRepost={handleRepost}
          commentsList={comments[post.id] || []}
        />
      ))}
    </div>
  );
};

export default Feed;

// =========================
// Count Helpers
// =========================

function updateCount(value, amount) {
  const number = parseCount(value);
  const updatedNumber = Math.max(0, number + amount);

  return formatCount(updatedNumber);
}

function parseCount(value) {
  if (typeof value === "number") {
    return value;
  }

  const text = String(value).trim().toUpperCase();

  if (text.endsWith("M")) {
    return parseFloat(text) * 1000000;
  }

  if (text.endsWith("K")) {
    return parseFloat(text) * 1000;
  }

  return parseFloat(text) || 0;
}

function formatCount(number) {
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
  }

  if (number >= 1000) {
    return `${(number / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  }

  return String(number);
}
