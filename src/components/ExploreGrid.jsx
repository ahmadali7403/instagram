import { posts } from "../data/data";

const ExploreGrid = () => {
  const images = [...posts, ...posts, ...posts, ...posts];

  return (
    <section className="grid grid-cols-3 gap-[2px] pb-20">
      {images.map((post, index) => (
        <div key={index} className="aspect-square overflow-hidden">
          <img
            src={post.image}
            alt={post.caption}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </section>
  );
};

export default ExploreGrid;
