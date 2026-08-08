import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Create = () => {
  return (
    <div className=" bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-gray-200 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="relative flex items-center justify-center border-b border-gray-200 py-4">
          <h1 className="text-[16px] font-semibold">Create new post</h1>

          <button className="absolute right-4 cursor-pointer">
            <IoClose size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="min-h-[400px] flex flex-col items-center justify-center px-6">
          <div className="w-16 h-16 rounded-full bg-[#F2F2F2] flex items-center justify-center mb-5">
            <FiPlus size={34} className="text-[#262626]" />
          </div>

          <h2 className="text-xl font-normal text-[#262626]">
            Create a new post
          </h2>

          <p className="text-sm text-[#737373] mt-2 text-center">
            Share photos and videos with your followers.
          </p>

          <button className="mt-6 bg-[#0095F6] text-white px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer hover:bg-[#1877F2] transition">
            Select from computer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
