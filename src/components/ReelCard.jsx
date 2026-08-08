import { useEffect, useRef } from "react";
import ReelInfo from "./ReelInfo";
import ReelActions from "./ReelActions";

const ReelCard = ({ post }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((error) => {
            console.log("Reel play error:", error);
          });
        } else {
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
    };
  }, []);

  const handleVideoClick = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play().catch((error) => {
        console.log("Reel play error:", error);
      });
    } else {
      video.pause();
    }
  };

  return (
    <section className="relative h-screen w-full snap-start overflow-hidden bg-black">
      {/* Video */}
      <video
        ref={videoRef}
        src={post.video}
        className="absolute inset-0 h-full w-full object-cover"
        loop
        playsInline
        preload="metadata"
        onClick={handleVideoClick}
      />

      {/* Dark Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Reel Info */}
      <div className="absolute bottom-10 left-0 z-20 w-full px-4">
        <ReelInfo
          username={post.username}
          profile={post.profile}
          verified={post.verified}
          caption={post.caption}
          audio={post.audio}
        />
      </div>

      {/* Reel Actions */}
      <div className="absolute bottom-10 right-3 z-30">
        <ReelActions
          profile={post.profile}
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
        />
      </div>
    </section>
  );
};

export default ReelCard;
