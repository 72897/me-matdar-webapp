import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    sim1: false,
    sim2: false,
    textMessage1: false,
    textMessage2: false,
    personalWhatsApp: false,
    businessWhatsApp: false,
    accessibility: false,
    backgroundSetting: false,
    messageTime: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState("Detecting...");

  useEffect(() => {
    const getDeviceInfo = () => {
      const userAgent = navigator.userAgent.toLowerCase();

      if (userAgent.includes("samsung")) {
        return "Samsung Device";
      } else if (userAgent.includes("vivo")) {
        return "Vivo Device";
      } else if (userAgent.includes("oppo")) {
        return "Oppo Device";
      } else if (userAgent.includes("moto")) {
        return "Motorola Device";
      } else if (userAgent.includes("iphone")) {
        return "Apple iPhone";
      } else if (userAgent.includes("ipad")) {
        return "Apple iPad";
      } else if (userAgent.includes("windows")) {
        return "Windows PC";
      } else if (userAgent.includes("mac")) {
        return "MacBook / iMac";
      } else {
        return "Unknown Device";
      }
    };

    setDeviceInfo(getDeviceInfo());
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center ">
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
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
          <h2 className="text-lg font-semibold">Setting</h2>
          <Link onClick={() => navigate(-1)}>
            <div className="text-2xl cursor-pointer">{"<"}</div>
          </Link>
        </div>

        {/* Settings List */}
        <div className="mt-1">
          {Object.keys(settings).map((key, index) => (
            <div key={index} className="flex justify-between items-center p-1">
              <span className="font-semibold capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              {/* Toggle Switch */}
              <div
                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                  settings[key] ? "bg-purple-500" : "bg-gray-300"
                }`}
                onClick={() => toggleSetting(key)}
              >
                <div
                  className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                    settings[key]
                      ? "bg-white translate-x-6"
                      : "bg-white translate-x-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-4 text-center">
          <p className="font-semibold">Your Device Information</p>
          <div className="border-2 border-purple-500 p-3 rounded-lg mt-2">
            <p>{deviceInfo}</p>
            <p className="text-blue-600 cursor-pointer">
              (Youtube link attached)
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-4">
          <Link to="/autocall">
            <button className="bg-purple-500 text-white px-6 py-2 rounded-full">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
