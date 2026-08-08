import { useEffect, useRef } from "react";

const PostMedia = ({ image, video, isVideo }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    const vid = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play().catch((error) => {
            console.log("Video autoplay blocked:", error);
          });
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

    observer.observe(vid);

    return () => {
      observer.disconnect();
      vid.pause();
    };
  }, [isVideo]);

  const handleClick = () => {
    if (!isVideo || !videoRef.current) return;

    const vid = videoRef.current;

    if (vid.paused) {
      vid.play().catch((error) => {
        console.log("Video play failed:", error);
      });
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
          className="block h-full w-full object-cover object-center"
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={image}
          alt="Post"
          className="block h-full w-full object-cover object-center"
          loading="lazy"
          draggable="false"
        />
      )}
    </div>
  );
};

export default PostMedia;
