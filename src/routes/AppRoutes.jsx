import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Sidebar from "../components/Sidebar";
import DataUpload from "../pages/DataUpload";

const AppRoutes = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/data-upload" element={<DataUpload />} /> {/* Add Route */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
