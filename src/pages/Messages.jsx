import { useState } from "react";

import MessageHeader from "../components/MessageHeader";
import MessageSearch from "../components/MessageSearch";
import MessageList from "../components/MessageList";
import Chat from "../components/Chat";

const Messages = () => {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-2xl mx-auto pb-11">
        {!selectedUser ? (
          <>
            {/* Sticky Message Header */}
            <div className="sticky top-[45px] z-50 bg-white">
              <MessageHeader />
            </div>

            <MessageSearch search={search} setSearch={setSearch} />

            <MessageList search={search} onSelectUser={setSelectedUser} />
          </>
        ) : (
          <Chat user={selectedUser} onBack={() => setSelectedUser(null)} />
        )}
      </div>
    </div>
  );
};

export default Messages;
