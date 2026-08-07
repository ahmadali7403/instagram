import { IoSearch } from "react-icons/io5";

const SearchBar = ({ search, setSearch, setIsFocused }) => {
  return (
    <div className="sticky top-[45px] z-40 bg-white px-4 py-3">
      <div className="flex items-center gap-3 rounded-xl bg-[#efefef] px-4 py-2.5">
        <IoSearch className="text-[20px] text-[#737373]" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search"
          className="w-full bg-transparent text-[16px] outline-none placeholder:text-[#737373]"
        />
      </div>
    </div>
  );
};

export default SearchBar;
