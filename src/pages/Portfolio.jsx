import { useState, useRef } from "react";
import PortfolioTable from "../components/PortfolioTable";
import DataUpload from "./DataUpload";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const triggerUploadRef = useRef(null);

  const tabs = ["All", "Responses", "Symbolic Possession", "DM Order", "Physical Possession", "Auctions"];

  return (
    <div className="ml-64 p-4">
      <h1 className="text-2xl font-bold mb-4">Portfolio</h1>

      {/* Tabs Section */}
      <div className="flex space-x-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? "bg-blue-600 text-black" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Loan Number */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Loan Number..."
          className="p-2 border rounded w-full"
        />
      </div>

      {/* Filters Section */}
      <div className="flex justify-between items-center mb-4 p-2 border-b">
        <div>
          <button className="px-4 py-2 bg-gray-700 text-black rounded mr-2">Select Columns</button>
          <button
            className="px-4 py-2 bg-gray-700 text-black rounded"
            onClick={() => setIsUploadModalOpen(true)}
          >
            📂 Upload File
          </button>
        </div>
      </div>

      {/* Table */}
      <PortfolioTable activeTab={activeTab} />

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Upload Document</h2>
            <DataUpload closeModal={() => setIsUploadModalOpen(false)} />
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-black rounded w-full"
              onClick={() => setIsUploadModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
