import { IoSearchOutline } from "react-icons/io5";

const MessageSearch = ({ search, setSearch }) => {
  return (
    <div className="px-5 py-3">
      <div className="flex items-center gap-2 bg-[#EFEFEF] rounded-lg px-3 py-2.5">
        <IoSearchOutline size={20} className="text-[#737373]" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full bg-transparent outline-none text-sm placeholder:text-[#737373]"
        />
      </div>
    </div>
  );
};

export default MessageSearch;
