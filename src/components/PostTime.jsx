const PostTime = ({ time }) => {
  return (
    <div className="px-3 pt-1 pb-3">
      <span className="text-[11px] uppercase tracking-wide text-[#737373]">
        {time}
      </span>
    </div>
  );
};

export default PostTime;
