import { IoSearchOutline } from "react-icons/io5";

const MessageSearch = () => {
  return (
    <div className="px-5 py-4">
      <div className="flex items-center gap-3 bg-[#EFEFEF] rounded-lg px-4 py-2.5">
        <IoSearchOutline size={20} className="text-[#737373]" />

        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none text-sm placeholder:text-[#737373]"
        />
      </div>
    </div>
  );
};

export default MessageSearch;
