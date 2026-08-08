import { useState } from "react";
import { users } from "../data/data";
import { IoClose } from "react-icons/io5";
import Profile from "../pages/Profile";
import ProfileHeader from "./ProfileHeader";

const ProfileInfo = () => {
  const user = users[1];

  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(
    "Frontend Developer 💻\nReact • JavaScript • Tailwind CSS",
  );

  const [editOpen, setEditOpen] = useState(false);

  const handleSave = () => {
    setEditOpen(false);
  };

  const handleShare = async () => {
    const profileUrl = `${window.location.origin}/profile`;

    try {
      await navigator.clipboard.writeText(profileUrl);
      alert("Profile link copied!");
    } catch {
      alert(profileUrl);
    }
  };

  return (
    <>
      <section className="px-5 pt-2 pb-5">
        <ProfileHeader username = {username}/>
        <div className="flex items-center gap-6">
          <img
            src={user.image}
            alt={username}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
          />

          <div className="flex flex-1 justify-around text-center">
            <div>
              <p className="text-[17px] font-semibold">18</p>
              <p className="text-[13px] text-[#737373]">posts</p>
            </div>

            <div>
              <p className="text-[17px] font-semibold">1.2K</p>
              <p className="text-[13px] text-[#737373]">followers</p>
            </div>

            <div>
              <p className="text-[17px] font-semibold">326</p>
              <p className="text-[13px] text-[#737373]">following</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-4">
          <h2 className="text-[15px] font-semibold">{username}</h2>

          <p className="text-[14px] leading-5 mt-1 text-[#262626] whitespace-pre-line">
            {bio}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setEditOpen(true)}
            className="flex-1 bg-[#EFEFEF] rounded-lg py-2 text-sm font-semibold cursor-pointer hover:bg-[#E5E5E5]"
          >
            Edit profile
          </button>

          <button
            onClick={handleShare}
            className="flex-1 bg-[#EFEFEF] rounded-lg py-2 text-sm font-semibold cursor-pointer hover:bg-[#E5E5E5]"
          >
            Share profile
          </button>
        </div>
      </section>

      {/* Edit Modal */}
      {editOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center px-4">
          <div className="w-full max-w-md bg-white rounded-xl overflow-hidden">
            {/* Modal Header */}
            <div className="relative flex items-center justify-center border-b border-gray-200 py-4">
              <h2 className="font-semibold">Edit profile</h2>

              <button
                onClick={() => setEditOpen(false)}
                className="absolute right-4 cursor-pointer"
              >
                <IoClose size={23} />
              </button>
            </div>

            <div className="p-5">
              {/* Username */}
              <label className="text-sm font-semibold">Username</label>

              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-2 text-sm outline-none focus:border-black"
              />

              {/* Bio */}
              <label className="block text-sm font-semibold mt-5">Bio</label>

              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-2 text-sm outline-none resize-none focus:border-black"
              />

              <button
                onClick={handleSave}
                className="w-full mt-5 bg-[#0095F6] text-white rounded-lg py-2.5 text-sm font-semibold cursor-pointer hover:bg-[#1877F2]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileInfo;
