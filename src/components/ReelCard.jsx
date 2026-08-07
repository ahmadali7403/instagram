import { useEffect, useRef } from "react";
import ReelHeader from "./ReelHeader";
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
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.8,
      },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const handleVideoClick = () => {
  
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className="relative h-screen w-full snap-start overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={post.video}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        preload="metadata"
        onClick={handleVideoClick}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      <ReelHeader />

      <ReelInfo
        username={post.username}
        profile={post.profile}
        verified={post.verified}
        caption={post.caption}
        audio={post.audio}
      />

      <ReelActions
        profile={post.profile}
        likes={post.likes}
        comments={post.comments}
        shares={post.shares}
      />
    </section>
  );
};

export default ReelCard;
