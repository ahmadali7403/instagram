import MessageHeader from "../components/MessageHeader";
import MessageSearch from "../components/MessageSearch";
import MessageList from "../components/MessageList";

const Messages = () => {
  return (
    <div className="min-h-screen bg-white pb-11">
      <div className="w-full max-w-2xl mx-auto">
        <MessageHeader />
        <MessageSearch />
        <MessageList />
      </div>
    </div>
  );
};

export default Messages;
