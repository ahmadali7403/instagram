import { useState } from "react";

import ProfileInfo from "../components/ProfileInfo";
import ProfileTabs from "../components/ProfileTabs";
import ProfileGrid from "../components/ProfileGrid";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-3xl mx-auto">
        <ProfileInfo />

        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <ProfileGrid activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Profile;
