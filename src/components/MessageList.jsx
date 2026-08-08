import MessageUser from "./MessageUser";
import { users } from "../data/data";

const MessageList = ({ search, onSelectUser }) => {
  const messages = users.slice(1, 8).map((user, index) => ({
    ...user,
    message: [
      "Hey! How are you?",
      "Sent you a reel",
      "Nice post 🔥",
      "What's up?",
      "See you soon!",
      "That's awesome 😍",
      "Good morning!",
    ][index],

    time: ["2m", "15m", "1h", "2h", "5h", "1d", "2d"][index],
  }));

  const filteredMessages = messages.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      {filteredMessages.length > 0 ? (
        filteredMessages.map((user) => (
          <div
            key={user.id}
            onClick={() => onSelectUser(user)}
            className="cursor-pointer"
          >
            <MessageUser user={user} />
          </div>
        ))
      ) : (
        <div className="text-center py-12">
          <p className="text-sm text-[#737373]">No users found</p>
        </div>
      )}
    </div>
  );
};

export default MessageList;
