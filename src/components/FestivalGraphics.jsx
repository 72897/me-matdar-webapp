import React from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { useState } from "react";
import Navbar from "./Navbar";

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
];

const FestivalGraphics = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
          <h2 className="text-lg font-semibold cursor-pointer">
            Festival Graphics
          </h2>
          <Link to="/shareapp">
            <CiShare2 className="text-2xl cursor-pointer" />
          </Link>
        </div>

        {/* Title Banner */}
        <div className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm w-[220px] text-center justify-center items-center mx-auto">
          Festival : Graphics : 10 March
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4 mt-4 max-w-md">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Festival ${index}`}
                className="w-24 h-24 rounded-lg border border-purple-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FestivalGraphics;
