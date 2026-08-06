import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopNavbar />

      <main>
        <Outlet />
      </main>
      <BottomNavbar />
    </div>
  );
};

export default MainLayout;
