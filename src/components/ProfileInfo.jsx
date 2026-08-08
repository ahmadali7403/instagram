import { users } from "../data/data";

const ProfileInfo = () => {
  const user = users[1];

  return (
    <section className="px-5 pb-3">
      {/* Profile top */}
      <div className="flex items-center gap-6">
        <img
          src={user.image}
          alt={user.username}
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
      <div className="mt-2">
        <p className="text-[14px] leading-5 mt-1 text-[#262626]">
          Frontend Developer 💻
          <br />
          React • JavaScript • Tailwind CSS
          <br />
          Building something awesome 🚀
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-2">
        <button className="flex-1 bg-[#EFEFEF] rounded-lg py-2 text-sm font-semibold cursor-pointer">
          Edit profile
        </button>

        <button className="flex-1 bg-[#EFEFEF] rounded-lg py-2 text-sm font-semibold cursor-pointer">
          Share profile
        </button>
      </div>
    </section>
  );
};

export default ProfileInfo;
