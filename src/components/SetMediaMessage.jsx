import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import Navbar from "./Navbar";

const SetMediaMessage = () => {
  const [smsText, setSmsText] = useState("");
  const [whatsappText, setWhatsappText] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("savedMediaMessage");
    if (savedData) {
      const { smsText, whatsappText, uploadedFile } = JSON.parse(savedData);
      setSmsText(smsText);
      setWhatsappText(whatsappText);
      setUploadedFile(uploadedFile);
    }
  }, []);

  // Handle File Upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setUploadedFile({ name: file.name, url: reader.result });
      };
    }
  };

  // Save data in localStorage
  const handleSave = () => {
    const data = { smsText, whatsappText, uploadedFile };
    const userId = localStorage.getItem("loggedInUserId") || "guest";
    localStorage.setItem(`savedMediaMessage_${userId}`, JSON.stringify(data));

    alert("Data Saved Successfully!");
    navigate("/autocall"); // Redirect
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      {/* Menu Overlay */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <Navbar closeMenu={() => setMenuOpen(false)} />
        </div>
      )}

      {/* Main Container */}
      <div className="w-[375px] h-full bg-white shadow-md rounded-xl p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center p-2 border-b">
          <IoMdMenu
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
          <h2 className="text-lg font-semibold">Set Media & Message</h2>
          <Link onClick={() => navigate(-1)}>
            <div className="text-2xl cursor-pointer">{"<"}</div>
          </Link>
        </div>

        {/* SMS Text Input */}
        <div className="mt-8 border-2 border-purple-500 rounded-2xl p-10 mb-4">
          <input
            type="text"
            value={smsText}
            onChange={(e) => setSmsText(e.target.value)}
            placeholder="Write SMS text"
            className="w-full bg-transparent outline-none text-black text-center"
          />
        </div>

        {/* WhatsApp Text Input */}
        <div className="mt-8 border-2 border-purple-500 rounded-2xl p-10 mb-4">
          <input
            type="text"
            value={whatsappText}
            onChange={(e) => setWhatsappText(e.target.value)}
            placeholder="Write WhatsApp text"
            className="w-full bg-transparent outline-none text-black text-center"
          />
        </div>

        {/* File Upload Section */}
        <div className="border-2 border-purple-500 rounded-lg p-7 mb-4 text-center">
          <label className="text-purple-600 font-semibold cursor-pointer">
            Set up File here display
            <input type="file" className="hidden" onChange={handleFileUpload} />
          </label>
          {uploadedFile && (
            <p className="text-gray-600 text-sm mt-2">{uploadedFile.name}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col justify-center items-center">
          {/* Upload Media Button */}
          <button
            className="w-[150px] bg-purple-500 text-white py-2 rounded-full mb-2"
            onClick={() => document.querySelector('input[type="file"]').click()}
          >
            Upload Media
          </button>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-[150px] bg-purple-500 text-white py-2 rounded-full"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetMediaMessage;
