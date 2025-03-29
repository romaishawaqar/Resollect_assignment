import { useState, useRef } from "react";

const DataUpload = ({ closeModal }) => {
  const [files, setFiles] = useState([]);
  const [docName, setDocName] = useState("");
  const [docType, setDocType] = useState("");
  const [remarks, setRemarks] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    if (selectedFiles.length > 0) {
      setFiles([...files, { file: selectedFiles[0], docName, docType, remarks }]);
      setDocName("");
      setDocType("");
      setRemarks("");
    }
  };

  const triggerFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!docName || !docType || !remarks) {
      alert("Please fill in all fields before uploading.");
      return;
    }
    triggerFileUpload();
  };

  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[40rem] p-4 border rounded shadow-md bg-white">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block font-semibold">Document Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
            required
          />
        </div>

        <div className="mb-2">
          <label className="block font-semibold">Document Type</label>
          <select
            className="w-full p-2 border rounded"
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
            required
          >
            <option value="">Select Type</option>
            <option value="PDF">PDF</option>
            <option value="Image">Image</option>
            <option value="Word">Word Document</option>
            <option value="Excel">Excel Sheet</option>
          </select>
        </div>

        <div className="mb-2">
          <label className="block font-semibold">Remarks</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            required
          />
        </div>

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-black rounded w-full"
        >
          📂 Select File & Upload
        </button>
      </form>

      {files.length > 0 && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-lg font-bold mb-2">Uploaded Files</h2>
          <ul className="list-disc ml-6">
            {files.map((file, index) => (
              <li key={index} className="flex justify-between items-center p-2 border-b">
                <span>
                  {file.docName} ({file.docType}) - {file.remarks}
                </span>
                <button
                  className="px-2 py-1 text-red-500 hover:text-red-700"
                  onClick={() => setFiles(files.filter((_, i) => i !== index))}
                >
                  ❌ Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DataUpload;
