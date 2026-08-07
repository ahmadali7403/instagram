import { useRef, useEffect } from "react";

const PostMedia = ({ image, video, isVideo }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const vid = videoRef.current;
        if (!vid) return;

        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
          vid.currentTime = 0;
          vid.muted = true;
        }
      },
      {
        threshold: 0.7,
      },
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [isVideo]);

  const handleClick = () => {
    if (!isVideo) return;

    const vid = videoRef.current;

    if (vid.muted) {
      vid.muted = false;
      return;
    }

    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  };

  return (
    <div
      className="w-full aspect-[4/5] overflow-hidden bg-black cursor-pointer"
      onClick={handleClick}
    >
      {isVideo ? (
        <video
          ref={videoRef}
          src={video}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={image}
          alt="Post"
          className="w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />
      )}
    </div>
  );
};

export default PostMedia;
