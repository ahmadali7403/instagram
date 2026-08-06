const PostCaption = ({ username, caption }) => {
  return (
    <div className="px-4">
      <p className="text-[14px] leading-5 text-[#262626]">
        <span className="font-semibold mr-1">{username}</span>
        {caption}
      </p>
    </div>
  );
};

export default PostCaption;
