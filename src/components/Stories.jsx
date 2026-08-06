import StoryItem from "./StoryItem";

const users = [
  { id: 1, username: "Your story", image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, username: "awais", image: "https://i.pravatar.cc/150?img=2" },
  { id: 3, username: "hamza", image: "https://i.pravatar.cc/150?img=3" },
  { id: 4, username: "ali", image: "https://i.pravatar.cc/150?img=4" },
  { id: 5, username: "zain", image: "https://i.pravatar.cc/150?img=5" },
  { id: 6, username: "usman", image: "https://i.pravatar.cc/150?img=6" },
  { id: 7, username: "bilal", image: "https://i.pravatar.cc/150?img=7" },
  { id: 8, username: "abdullah", image: "https://i.pravatar.cc/150?img=8" },
  { id: 9, username: "anas", image: "https://i.pravatar.cc/150?img=9" },
  { id: 10, username: "hassan", image: "https://i.pravatar.cc/150?img=10" },
  { id: 11, username: "omer", image: "https://i.pravatar.cc/150?img=11" },
  { id: 12, username: "farhan", image: "https://i.pravatar.cc/150?img=12" },
  { id: 13, username: "waqas", image: "https://i.pravatar.cc/150?img=13" },
  { id: 14, username: "saad", image: "https://i.pravatar.cc/150?img=14" },
  { id: 15, username: "mustafa", image: "https://i.pravatar.cc/150?img=15" },
  { id: 16, username: "talha", image: "https://i.pravatar.cc/150?img=16" },
  { id: 17, username: "shayan", image: "https://i.pravatar.cc/150?img=17" },
  { id: 18, username: "danish", image: "https://i.pravatar.cc/150?img=18" },
];

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
