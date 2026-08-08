import ProfileHeader from "../components/ProfileHeader";
import ProfileInfo from "../components/ProfileInfo";
import ProfileTabs from "../components/ProfileTabs";
import ProfileGrid from "../components/ProfileGrid";

const Profile = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-3xl mx-auto">
        <ProfileHeader />
        <ProfileInfo />
        <ProfileTabs />
        <ProfileGrid />
      </div>
    </div>
  );
};

export default Profile;
