import { useState } from "react";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import StoryItem from "./StoryItem";
import { users } from "../data/data";

const Stories = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedUser = selectedIndex !== null ? users[selectedIndex] : null;

  const closeStory = () => {
    setSelectedIndex(null);
  };

  const nextStory = () => {
    setSelectedIndex((prev) => {
      if (prev === users.length - 1) {
        return null;
      }

      return prev + 1;
    });
  };

  const previousStory = () => {
    setSelectedIndex((prev) => {
      if (prev === 0) {
        return 0;
      }

      return prev - 1;
    });
  };

  return (
    <>
      {/* Stories */}
      <section className="flex gap-2.5 overflow-x-auto px-0.5 py-1 no-scrollbar">
        {users.map((user, index) => (
          <StoryItem
            key={user.id}
            {...user}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </section>

      {/* Story Viewer */}
      {selectedUser && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black">
          {/* Close */}
          <button
            onClick={closeStory}
            className="absolute right-5 top-5 z-50 cursor-pointer text-white"
          >
            <IoClose size={32} />
          </button>

          {/* Previous */}
          <button
            onClick={previousStory}
            disabled={selectedIndex === 0}
            className="absolute left-5 z-50 cursor-pointer text-white disabled:opacity-30"
          >
            <IoChevronBack size={38} />
          </button>

          {/* Story */}
          <div className="relative h-full w-full max-w-[430px] overflow-hidden bg-black">
            {/* Top progress bar */}
            <div className="absolute left-3 right-3 top-3 z-20 h-1 overflow-hidden rounded-full bg-white/30">
              <div className="h-full w-full rounded-full bg-white" />
            </div>

            {/* User info */}
            <div className="absolute left-4 top-7 z-20 flex items-center gap-2">
              <img
                src={selectedUser.image}
                alt={selectedUser.username}
                className="h-9 w-9 rounded-full object-cover"
              />

              <span className="text-sm font-semibold text-white">
                {selectedUser.username}
              </span>
            </div>

            {/* Story Image */}
            <img
              src={selectedUser.image}
              alt={selectedUser.username}
              className="h-full w-full object-cover"
            />

            {/* Next */}
            <button
              onClick={nextStory}
              className="absolute inset-y-0 right-0 w-1/3 cursor-pointer"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextStory}
            className="absolute right-5 z-50 cursor-pointer text-white"
          >
            <IoChevronForward size={38} />
          </button>
        </div>
      )}
    </>
  );
};

export default Stories;
