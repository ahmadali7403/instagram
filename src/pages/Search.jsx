import { useState } from "react";
import { users } from "../data/data";

import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";
import ExploreGrid from "../components/ExploreGrid";

const Search = () => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const [recentUsers, setRecentUsers] = useState(users.slice(1, 3));

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase()),
  );

  const removeUser = (id) => {
    setRecentUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setIsFocused={setIsFocused}
      />

      {isFocused || search.trim() !== "" ? (
        <SearchList
          users={search.trim() === "" ? recentUsers : filteredUsers}
          showRemoveButton={search.trim() === ""}
          removeUser={removeUser}
        />
      ) : (
        <ExploreGrid />
      )}
    </>
  );
};

export default Search;
