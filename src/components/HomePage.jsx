import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { CiShare2 } from "react-icons/ci";

const HomePage = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  // Default images for slider
  const defaultImages = [
    "https://media.istockphoto.com/id/2152515127/photo/southern-lights-over-lake-te-anau.jpg?s=1024x1024&w=is&k=20&c=UgpP14LeS2aeICcMxkkTH8jtnYE5V8DRsPaA_qlimlQ=",
    "https://media.istockphoto.com/id/1822247032/photo/aerial-view-of-serpentine-road-in-swiss-alps-in-autumn.jpg?s=1024x1024&w=is&k=20&c=X_m7HBseg1VryJCTwn074AXTldZYiC28ddgyFVQXNfc=",
    "https://media.istockphoto.com/id/2153573059/photo/mountain-covered-with-a-coniferous-fir-tree-forest-scenic-landscape-from-carpathian-mountains.jpg?s=1024x1024&w=is&k=20&c=hwDTriUtxDP_4A6jQKVRWTTTXLf8jim4w3w1K2dcaHU=",
  ];

  const [images, setImages] = useState(defaultImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false); // Set to `true` for admin editing

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  // Handle image upload (Admin only)
  const handleImageUpload = (e, index) => {
    if (!isAdmin) return;
    const file = e.target.files[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file);
      setImages((prev) => {
        const newImages = [...prev];
        newImages[index] = newImageURL;
        return newImages;
      });
    }
  };

  return (
    <div className="w-full h-full bg-gray-100 flex justify-center items-center relative">
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
          <h2 className="text-lg font-semibold cursor-pointer">Home Page</h2>
          <Link to="/shareapp">
            <CiShare2 className="text-2xl cursor-pointer" />
          </Link>
        </div>

        {/* Slider Image Section */}
        <div className="mt-4 p-4 border-2 border-purple-500 rounded-lg text-center">
          {/* Image Slider */}
          <div className="relative w-full h-40 mt-2 overflow-hidden rounded-lg">
            <img
              src={images[currentIndex]}
              alt="Slider"
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />
          </div>

          {/* Admin-only Image Upload Inputs */}
          {isAdmin && (
            <div className="mt-2 flex flex-wrap justify-center space-x-2">
              {images.map((_, index) => (
                <label key={index} className="cursor-pointer text-blue-600">
                  Change Image {index + 1}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, index)}
                  />
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Feature Buttons */}
        <div className="grid grid-cols-3 gap-4 mt-2 p-2">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link || "#"}
              className="flex flex-col items-center border-2 border-purple-500 p-3 rounded-lg transition-transform duration-150 hover:scale-105 cursor-pointer"
            >
              <div className="bg-purple-500 text-white p-2 rounded-full text-xl">
                {feature.icon || <div>ICON</div>}
              </div>
              <p className="text-sm mt-2 text-center">{feature.label}</p>
            </Link>
          ))}
        </div>

        {/* Info Cards */}
        <div className="">
          <div className="mt-2 p-4 border rounded-lg flex justify-between hover:bg-sky-700 transition-transform duration-150 hover:scale-105 cursor-pointer">
            <span className="font-semibold">Remaining Days</span>
            <span className="text-purple-600 font-bold">365</span>
          </div>
          <div className="mt-2 p-4 border rounded-lg flex justify-between hover:bg-sky-700 transition-transform duration-150 hover:scale-105 cursor-pointer">
            <span className="font-semibold">Referral Count</span>
            <span className="text-purple-600 font-bold">20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  { label: "Auto call Message", icon: <FaPhoneAlt />, link: "/autocall" },
  { label: "Daily Banner", icon: null, link: "/dailybanner" },
  { label: "Mini website", icon: null },
  { label: "Bulk Messenger", icon: null },
  { label: "Voter APP", icon: null },
  { label: "Earning Money", icon: null },
];

export default HomePage;
