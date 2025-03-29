import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaBell, FaClipboard, FaGavel, FaUpload, FaCogs, FaUsers, FaUserShield } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 fixed top-0 left-0">
      <h2 className="text-lg font-bold mb-6">🔹 Resollect</h2>
      <nav className="space-y-2">
        <Link to="/" className="flex items-center p-2 rounded hover:bg-blue-600">
          <FaHome className="mr-2" /> Dashboard
        </Link>
        <Link to="/portfolio" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FaBriefcase className="mr-2" /> Portfolio
        </Link>
        <Link to="/notifications" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FaBell className="mr-2" /> Notifications
        </Link>
        <Link to="/notices" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FaClipboard className="mr-2" /> Notices
        </Link>
        <Link to="/auction" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FaGavel className="mr-2" /> Auction
        </Link>
        <Link to="/data-upload" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FaUpload className="mr-2" /> Data Upload
        </Link>
        <Link to="/control-panel" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FaCogs className="mr-2" /> Control Panel
        </Link>
        <Link to="/user-management" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FaUsers className="mr-2" /> User Management
        </Link>
        <Link to="/permissions" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FaUserShield className="mr-2" /> Permissions
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
