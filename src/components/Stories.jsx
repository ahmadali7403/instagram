import StoryItem from "./StoryItem";
import { users } from "../data/data";

const Stories = () => {
  return (
    <section className="flex gap-2.5 overflow-x-auto px-0.5 py-1 no-scrollbar">
      {users.map((user) => (
        <StoryItem key={user.id} {...user} />
      ))}
    </section>
  );
};

export default Stories;
