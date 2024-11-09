import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { imageData } from "../Data/users";

const User = () => {
  const { index } = useParams();
  const selectedData = imageData.find((item) => item.index === parseInt(index));

  if (!selectedData) {
    return <div>User not found</div>;
  }

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="relative font-Cormorant w-full h-screen overflow-hidden bg-gradient-to-t from-black/90 to-transparent">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform"
        style={{
          backgroundImage: `url(${selectedData.image})`,
          zIndex: -1,
          transition: "transform 0.1s ease-out", 
        }}
      ></div>

      <div className="absolute bottom-5 left-5 text-white font-bold text-6xl">
        {selectedData.name}
      </div>

      <div className="absolute right-5 top-0 h-screen p-4 overflow-auto w-1/2">
        <div className="text-4xl font-semibold mb-3 pt-96 text-gray-100">{selectedData.company}</div>
        <p className="text-xl font-semibold mb-3 text-gray-400">{selectedData.position}</p>
        <a
          href={selectedData.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 bg-gray-950 shadow-lg rounded-2xl px-3 py-2 mb-3"
        >
          Visit Website
        </a>

        <div className="text-xl font-semibold mb-1 text-gray-100 pt-8">Location</div>
        <p className="text-sm mb-3 text-gray-100">{selectedData.country}</p>

        <div className="text-3xl font-semibold mb-3 text-gray-200 pt-8">Bio</div>
        <p className="text-2xl mb-3 text-gray-300">{selectedData.bio}</p>

        <div className="text-3xl font-semibold mb-3 text-gray-200 pt-8">Offer</div>
        <p className="text-2xl mb-3 text-gray-300">{selectedData.offer}</p>

        <div className="text-3xl font-semibold mb-3 text-gray-200 pt-8">Need</div>
        <p className="text-2xl mb-3 text-gray-300">{selectedData.Need}</p>
      </div>
    </div>
  );
};

export default User;
