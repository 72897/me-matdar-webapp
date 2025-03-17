import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import Navbar from "./Navbar"; // Ensure Navbar is correctly exported and imported

const data = {
  title: "Business Graphics",
  type: "business-graphics",
  images: [
    "leader.jpg",
    "doctor.jpg",
    "ca.jpg",
    "lawyer.jpg",
    "reporter.jpg",
    "reporter.jpg",
    "goldshop.jpg",
    "cake.jpg",
    "tax.jpg",
    "ms-cit.jpg",
    "electrician.jpg",
    "broker.jpg",
  ],
  labels: [
    "Leader",
    "Doctor",
    "CA",
    "Lawyer",
    "Reporter",
    "Reporter",
    "Gold Shop",
    "Cake",
    "Tax",
    "MS-CIT",
    "Electrician",
    "Broker",
  ],
};

const BusinessGraphics = () => {
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
            Business Graphics
          </h2>
          <Link to="/shareapp">
            <CiShare2 className="text-2xl cursor-pointer" />
          </Link>
        </div>

        {/* Title Banner */}
        <div className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm w-[220px] text-center mx-auto">
          Business : Graphics
        </div>

        {/* Image Grid - 3 Columns */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {data.images.map((image, idx) => (
            <div key={idx} className="text-center">
              <img
                src={image}
                alt={`Banner ${idx}`}
                className="w-full h-32 rounded-lg border border-purple-500 object-cover"
              />
              <p className="text-xs mt-1">{data.labels[idx]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessGraphics;
