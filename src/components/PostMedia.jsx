const PostMedia = ({ image }) => {
  return (
    <div className="w-full aspect-[4/5] overflow-hidden bg-black">
      <img
        src={image}
        alt="Post"
        className="block h-full w-full object-cover object-center"
        loading="lazy"
        draggable="false"
      />
    </div>
  );
};

export default PostMedia;