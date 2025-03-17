import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { IoMdMenu } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { useState } from "react";

const DailyBanner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-full bg-gray-100 flex justify-center items-center relative n-scrollbar">
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <Navbar closeMenu={() => setMenuOpen(false)} />
        </div>
      )}

      <div className="w-[375px] h-full bg-white shadow-md rounded-xl p-4 relative overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="flex justify-between items-center p-2 border-b mb-4">
          <IoMdMenu
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
          <h2 className="text-lg font-semibold cursor-pointer">Dailt Banner</h2>
          <Link to="/shareapp">
            <CiShare2 className="text-2xl cursor-pointer" />
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mb-4 items-center justify-center">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full">
            Create Profile
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full">
            Create Frame
          </button>
        </div>

        {data.map((section, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-center ">
              <h2 className="bg-purple-600 text-white px-3 py-1 rounded-lg">
                {section.title}
              </h2>
              <Link
                to={`/category/${section.type}`}
                className="text-blue-500 hover:underline hover:text-blue-800"
              >
                See All
              </Link>
            </div>

            {/* Image Grid */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar mt-2 pb-2">
              {section.images.map((image, idx) => (
                <div key={idx} className="text-center">
                  <img
                    src={image}
                    alt={`Banner ${idx}`}
                    className="w-20 h-32 rounded-lg border border-purple-500"
                  />
                  {section.labels && (
                    <p className="text-xs mt-1">{section.labels[idx]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    title: "Festival : Graphics : 10 March",
    type: "graphics",
    images: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"], // Placeholder image paths
  },
  {
    title: "Festival : Reels : 10 March",
    type: "reels",
    images: ["img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg"],
  },
  {
    title: "Business Graphics",
    type: "business-graphics",
    images: ["lawyer.jpg", "doctor.jpg", "ca.jpg", "broker.jpg"],
    labels: ["Lawyer", "Doctor", "CA", "Broker"],
  },
  {
    title: "Business Reels",
    type: "business-reels",
    images: ["img10.jpg", "img11.jpg", "img12.jpg", "img13.jpg"],
  },
];

export default DailyBanner;
