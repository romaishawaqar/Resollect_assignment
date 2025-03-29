import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Sidebar from "../components/Sidebar";
import DataUpload from "../pages/DataUpload";
import Notifications from "../pages/Notifications";
import Notices from "../pages/Notices";
import Auction from "../pages/Auction";
import ControlPanel from "../pages/ControlPanel";
import UserManagement from "../pages/UserManagement";
import Permissions from "../pages/Permissions";

const AppRoutes = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/notices" element={<Notices/>} />
        <Route path="/auction" element={<Auction/>} />
        <Route path="/control-panel" element={<ControlPanel/>} />
        <Route path="/user-management" element={<UserManagement/>} />
        <Route path="/permissions" element={<Permissions/>} />
        <Route path="/data-upload" element={<DataUpload />} /> {/* Add Route */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
