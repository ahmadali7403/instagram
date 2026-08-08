import { useEffect, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import ReelInfo from "./ReelInfo";
import ReelActions from "./ReelActions";
import CommentModal from "./CommentModal";

const ReelCard = ({
  post,
  onLike,
  onComment,
  onShare,
  onSave,
  comments = [],
}) => {
  const videoRef = useRef(null);
  const heartTimeoutRef = useRef(null);

  const [showComments, setShowComments] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  // =========================
  // Video Observer
  // =========================
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Baqi tamam videos pause
          document.querySelectorAll("video").forEach((otherVideo) => {
            if (otherVideo !== video) {
              otherVideo.pause();
              otherVideo.currentTime = 0;
            }
          });

          // Current reel play
          video.play().catch((error) => {
            console.log("Reel play error:", error);
          });
        } else {
          // Screen se bahar wali reel pause
          video.pause();
          video.currentTime = 0;
        }
      },
      {
        threshold: 0.8,
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();

      video.pause();
      video.currentTime = 0;

      if (heartTimeoutRef.current) {
        clearTimeout(heartTimeoutRef.current);
      }
    };
  }, []);

  // =========================
  // Single Click = Play / Pause
  // =========================
  const handleVideoClick = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      // Baqi videos pause
      document.querySelectorAll("video").forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.pause();
          otherVideo.currentTime = 0;
        }
      });

      video.play().catch((error) => {
        console.log("Reel play error:", error);
      });
    } else {
      video.pause();
    }
  };

  // =========================
  // Double Click = Like + Animation
  // =========================
  const handleDoubleClick = () => {
    // Agar already liked nahi hai to like karo
    if (!post.isLiked) {
      onLike(post.id);
    }

    // Heart show
    setShowHeart(true);

    // Previous timer clear
    if (heartTimeoutRef.current) {
      clearTimeout(heartTimeoutRef.current);
    }

    // Heart hide
    heartTimeoutRef.current = setTimeout(() => {
      setShowHeart(false);
    }, 900);
  };

  // =========================
  // Comment Button
  // =========================
  const handleCommentClick = () => {
    setShowComments(true);
  };

  // =========================
  // Add Comment
  // =========================
  const handleAddComment = (text) => {
    onComment(post.id, text);
  };

  return (
    <>
      {/* Heart Animation CSS */}
      <style>
        {`
          @keyframes reelHeartPop {
            0% {
              transform: scale(0);
              opacity: 0;
            }

            15% {
              transform: scale(1.35);
              opacity: 1;
            }

            30% {
              transform: scale(0.9);
              opacity: 1;
            }

            45% {
              transform: scale(1.15);
              opacity: 1;
            }

            65% {
              transform: scale(1);
              opacity: 1;
            }

            100% {
              transform: scale(1.12);
              opacity: 0;
            }
          }
        `}
      </style>

      {/* Reel */}
      <section className="relative h-[calc(100vh-46px-44px)] w-full snap-start overflow-hidden bg-black">
        {/* Video */}
        <video
          ref={videoRef}
          src={post.video}
          onClick={handleVideoClick}
          onDoubleClick={handleDoubleClick}
          className="h-full w-full cursor-pointer object-cover"
          loop
          playsInline
        />

        {/* =========================
            Big Pink + Red Heart
        ========================= */}
        {showHeart && (
          <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center">
            <div
              className="relative"
              style={{
                animation:
                  "reelHeartPop 0.9s cubic-bezier(0.17, 0.89, 0.32, 1.49) forwards",
              }}
            >
              {/* Pink Outer Heart */}
              <FaHeart
                size={190}
                className="text-pink-400 drop-shadow-[0_0_20px_rgba(255,105,180,0.9)]"
              />

              {/* Red Inner Heart */}
              <FaHeart
                size={150}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]"
              />
            </div>
          </div>
        )}

        {/* Dark Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Reel Info */}
        <div className="absolute bottom-0 left-0 z-20 w-full px-4">
          <ReelInfo
            username={post.username}
            profile={post.profile}
            verified={post.verified}
            caption={post.caption}
            audio={post.audio}
          />
        </div>

        {/* Reel Actions */}
        <div className="absolute bottom-0 right-3 z-30">
          <ReelActions
            profile={post.profile}
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
            isLiked={post.isLiked}
            isSaved={post.isSaved}
            onLike={() => onLike(post.id)}
            onComment={handleCommentClick}
            onShare={() => onShare(post.id)}
            onSave={() => onSave(post.id)}
          />
        </div>
      </section>

      {/* =========================
          Comment Bottom Sheet
      ========================= */}
      <CommentModal
        isOpen={showComments}
        onClose={() => setShowComments(false)}
        comments={comments}
        onAddComment={handleAddComment}
      />
    </>
  );
};

export default ReelCard;
