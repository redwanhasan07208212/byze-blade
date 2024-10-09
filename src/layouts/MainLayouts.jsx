import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayouts() {
  return (
    <div>
      <div className="h-[68px]">
        <Navbar />
      </div>
      <Outlet />
      <Footer/>
    </div>
  );
}
