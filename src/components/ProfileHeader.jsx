const ProfileHeader = ({ username }) => {
  const formattedName = username
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  console.log(formattedName);
  return (
    <header className="px-4 w-full text-center">
      <h1 className="text-[18px] font-bold text-[#262626]">{formattedName}</h1>
    </header>
  );
};

export default ProfileHeader;
