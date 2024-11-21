import React from "react";
import { FaEye } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { imageData } from "../Data/users";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/user/${index}`);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-800 font-Cormorant text-white">
      {/* Left Section */}
      <div className="flex flex-col justify-center gap-4 p-10 w-full lg:w-1/3 ">
        {/* Text Block */}
        <div className="mt-12">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Discover a curated selection of profiles and stories from around
            the world. Whether you're exploring or contributing, you're part of
            something amazing.
          </p>
        </div>

        {/* "Don't See Yourself?" Section */}
        <div className="bg-gray-700 rounded-lg p-6 shadow-xl flex flex-col items-center justify-center">
          <div className="flex items-center mb-4">
            <FaEye className="text-3xl text-orange-400" />
            <div className="ml-4">
              <p className="text-2xl font-semibold">Don't see yourself?</p>
              <p className="text-sm text-gray-400">
                You may not have completed our intake form.
              </p>
            </div>
          </div>
          <Link to="/form">
            <button className="flex items-center gap-2 px-4 py-2 text-lg font-semibold text-gray-900 bg-orange-400 rounded-full shadow-lg hover:bg-orange-500 transition duration-200">
              <FaLink />
              INTAKE FORM
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-grow lg:w-2/3 w-full h-screen p-10 overflow-x-auto overflow-y-hidden">
        <div
          className="relative overflow-hidden w-full h-full"
          style={{ position: "relative" }}
        >
          <div
            className="animate-scroll-content gap-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)", 
              animation: "scroll 35s linear infinite", 
              whiteSpace: "nowrap", 
            }}
          >
            {imageData
              .concat(imageData)
              .concat(imageData)
              .concat(imageData)
              .concat(imageData) 
              .map((item, index) => (
                <div
                  key={index}
                  className="relative bg-gray-700 rounded-xl overflow-hidden shadow-lg aspect-square w-[13rem] h-[16rem] hover:scale-110 duration-150 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.country}
                    className="w-full h-full object-cover"
                    onClick={() => handleClick(item.index)}
                  />
                  <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-lg font-bold truncate">{item.name}</h3>
                    <p className="text-sm text-gray-300">{item.country}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
