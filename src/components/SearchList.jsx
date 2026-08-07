import { IoClose } from "react-icons/io5";

const SearchList = ({
  users,
  showRemoveButton,
  removeUser,
  seeAllRecentUsers,
}) => {
  return (
    <section className="px-4 py-4">
      {/* Heading */}
      {showRemoveButton && (
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[16px] font-semibold">Recent</h2>

          <button
            className="text-[14px] font-medium text-[#0095F6] cursor-pointer"
            onClick={seeAllRecentUsers}
          >
            See all
          </button>
        </div>
      )}

      <div className="space-y-4">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              {/* Left */}
              <div className="flex items-center gap-3 cursor-pointer">
                <img
                  src={user.image}
                  alt={user.username}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-[14px] font-semibold text-[#262626]">
                    {user.username}
                  </h3>

                  <p className="text-[13px] text-[#737373]">
                    Suggested for you
                  </p>
                </div>
              </div>

              {/* X Button */}
              {showRemoveButton && (
                <button onClick={() => removeUser(user.id)}>
                  <IoClose className="text-[22px] text-[#737373] cursor-pointer" />
                </button>
              )}
            </div>
          ))
        ) : (
          <div className="flex justify-center py-10">
            <p className="text-[#737373]">No results found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchList;
