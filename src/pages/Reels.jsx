// import { posts } from "../data/data";
// import ReelCard from "../components/ReelCard";
// import ReelHeader from "../components/ReelHeader";

// const Reels = () => {
//   return (
//     <div className="overflow-hidden bg-black">
//       {/* Fixed Header */}
//       <ReelHeader />

//       {/* Reels */}
//       <div className="h-full overflow-y-auto snap-y snap-mandatory scrollbar-hide">
//         {posts.map((post) => (
//           <ReelCard key={post.id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Reels;

import { useEffect, useRef, useState } from "react";
import { posts } from "../data/data";
import ReelCard from "../components/ReelCard";
import ReelHeader from "../components/ReelHeader";

const Reels = () => {
  const [reels, setReels] = useState(
    posts.map((post) => ({
      ...post,
      isLiked: false,
      isSaved: false,
    })),
  );
  const [comments, setComments] = useState({});
  const reelsContainerRef = useRef(null);

  // Ye track karega ke abhi kis reel par hain
  const currentIndexRef = useRef(0);

  // Ek scroll ke baad foran doosra scroll na ho
  const isScrollingRef = useRef(false);

  // Mobile swipe ke liye
  const touchStartYRef = useRef(0);

  // =========================
  // Go To Reel
  // =========================

  const goToReel = (direction) => {
    const container = reelsContainerRef.current;

    if (!container) return;

    // Agar abhi animation chal rahi hai
    // to dobara scroll allow nahi karna
    if (isScrollingRef.current) return;

    let nextIndex = currentIndexRef.current + direction;

    // First reel se upar nahi ja sakte
    if (nextIndex < 0) {
      nextIndex = 0;
    }

    // Last reel se neeche nahi ja sakte
    if (nextIndex > reels.length - 1) {
      nextIndex = reels.length - 1;
    }

    // Agar same reel hai to kuch na karo
    if (nextIndex === currentIndexRef.current) return;

    currentIndexRef.current = nextIndex;

    isScrollingRef.current = true;

    // Har reel ki height container ke equal hai
    const reelHeight = container.clientHeight;

    container.scrollTo({
      top: nextIndex * reelHeight,
      behavior: "smooth",
    });

    // Animation complete hone ke baad next scroll allow
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  };

  // =========================
  // Mouse Wheel
  // =========================

  useEffect(() => {
    const container = reelsContainerRef.current;

    if (!container) return;

    const handleWheel = (event) => {
      // Normal browser scrolling rok do
      event.preventDefault();

      // Agar animation chal rahi hai
      // to is wheel event ko ignore karo
      if (isScrollingRef.current) return;

      // Neeche scroll
      if (event.deltaY > 0) {
        goToReel(1);
      }

      // Upar scroll
      if (event.deltaY < 0) {
        goToReel(-1);
      }
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [reels.length]);

  // =========================
  // Mobile Touch Start
  // =========================

  const handleTouchStart = (event) => {
    touchStartYRef.current = event.touches[0].clientY;
  };

  // =========================
  // Mobile Touch End
  // =========================

  const handleTouchEnd = (event) => {
    if (isScrollingRef.current) return;

    const touchEndY = event.changedTouches[0].clientY;

    const touchStartY = touchStartYRef.current;

    const difference = touchStartY - touchEndY;

    // Itna chhota movement swipe nahi maana jayega
    const swipeThreshold = 50;

    // Swipe UP
    if (difference > swipeThreshold) {
      goToReel(1);
    }

    // Swipe DOWN
    else if (difference < -swipeThreshold) {
      goToReel(-1);
    }
  };

  // =========================
  // Like / Unlike
  // =========================

  const handleLike = (id) => {
    setReels((prev) =>
      prev.map((reel) =>
        reel.id === id
          ? {
              ...reel,
              isLiked: !reel.isLiked,
              likes: updateCount(reel.likes, reel.isLiked ? -1 : 1),
            }
          : reel,
      ),
    );
  };

  // =========================
  // Save / Unsave
  // =========================

  const handleSave = (id) => {
    setReels((prev) =>
      prev.map((reel) =>
        reel.id === id
          ? {
              ...reel,
              isSaved: !reel.isSaved,
            }
          : reel,
      ),
    );
  };

  // =========================
  // Comment
  // =========================
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

    setReels((prev) =>
      prev.map((reel) =>
        reel.id === id
          ? {
              ...reel,
              comments: updateCount(reel.comments, 1),
            }
          : reel,
      ),
    );
  };
  // =========================
  // Share
  // =========================

  const handleShare = async (id) => {
    const reel = reels.find((item) => item.id === id);

    if (!reel) return;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `${reel.username}'s Reel`,
          text: reel.caption,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);

        alert("Reel link copied!");
      }

      setReels((prev) =>
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
    <div className="h-full relative">
      {/* Fixed Header */}
      <ReelHeader />

      {/* Reels */}
      <div
        ref={reelsContainerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="overflow-y-auto snap-y snap-mandatory scrollbar-hide"
        style={{
          height: "calc(100vh - 46px - 44px)",
          overscrollBehavior: "none",
          touchAction: "none",
        }}
      >
        {reels.map((post) => (
          <ReelCard
            key={post.id}
            post={post}
            onLike={handleLike}
            onComment={handleComment}
            onShare={handleShare}
            onSave={handleSave}
            comments={comments[post.id] || []}
          />
        ))}
      </div>
    </div>
  );
};

export default Reels;

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
