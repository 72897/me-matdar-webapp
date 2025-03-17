import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const AutocallMessage = () => {
  const [data, setData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0); // Key to trigger re-render

  useEffect(() => {
    const loggedInUserId = localStorage.getItem("loggedInUserId");

    if (loggedInUserId) {
      const userId = localStorage.getItem("loggedInUserId") || "guest";
      const savedData = localStorage.getItem(`savedMediaMessage_${userId}`);

      console.log("Retrieved Data:", savedData); // Debugging

      if (savedData) {
        setData(JSON.parse(savedData));
      } else {
        setData(null);
      }
    }
  }, [refreshKey]); // Re-run when `refreshKey` changes

  // Listen for changes in localStorage (alternative refresh method)
  useEffect(() => {
    const handleStorageChange = () => {
      setRefreshKey((prev) => prev + 1);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Navbar closeMenu={() => setMenuOpen(false)} />
        </div>
      )}

      <div className="w-[375px] h-full bg-white shadow-md rounded-xl p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center p-2 border-b">
          <IoMdMenu
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
          <h2 className="text-lg font-semibold">Auto Call Message</h2>
          <Link onClick={() => navigate(-1)}>
            <div className="text-2xl cursor-pointer">{"<"}</div>
          </Link>
        </div>

        {/* Display Saved Data */}
        {data ? (
          <div>
            {/* SMS Text */}
            <div className="mt-4 p-4 border-2 border-purple-500 rounded-lg text-center">
              <h3 className="text-lg font-semibold">SMS Text:</h3>
              <p className="text-gray-700">{data.smsText}</p>
            </div>

            {/* WhatsApp Text */}
            <div className="mt-4 p-4 border-2 border-purple-500 rounded-l text-center">
              <h3 className="text-lg font-semibold">WhatsApp Text:</h3>
              <p className="text-gray-700">{data.whatsappText}</p>
            </div>

            {/* Uploaded File */}
            {data.uploadedFile && (
              <div className="mt-4 p-4 border-2 border-purple-500 rounded-lg text-center">
                <h3 className="text-lg font-semibold">Uploaded File:</h3>
                <p className="text-gray-700">{data.uploadedFile.name}</p>
                {data.uploadedFile.url && (
                  <a
                    href={data.uploadedFile.url}
                    download={data.uploadedFile.name}
                    className="text-blue-500 underline"
                  >
                    Download File
                  </a>
                )}
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-600 text-center mt-10">No Data Saved!</p>
        )}

        {/* Buttons */}
        <div className="flex flex-col justify-center items-center pt-8">
          {/* Set Media & Messages */}
          <Link to="/setmedia">
            <button className="w-[250px] bg-purple-500 text-white py-2 rounded-full mb-2">
              Set Messages & Media
            </button>
          </Link>

          {/* Settings */}
          <Link to="/settings">
            <button className="w-[250px] bg-purple-500 text-white py-2 rounded-full mb-2">
              Settings
            </button>
          </Link>

          {/* Refresh Button */}
          <button
            className="w-[250px] bg-purple-500 text-white py-2 rounded-full"
            onClick={() => setRefreshKey((prevKey) => prevKey + 1)}
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutocallMessage;
