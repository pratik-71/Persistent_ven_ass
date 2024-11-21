import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { imageData } from "../Data/users";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaAngleUp } from "react-icons/fa6";

const User = () => {
  const { index } = useParams();
  const selectedData = imageData.find((item) => item.index === parseInt(index));

  if (!selectedData) {
    return <div className="text-center text-3xl font-bold text-white">User not found</div>;
  }

  const [scrollY, setScrollY] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);

    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
    setIsAtBottom(bottom);
  };


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative font-Raleway w-full min-h-screen overflow-hidden">


      {/* Fixed Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${selectedData.image})`,
          zIndex: -1,
          position: 'fixed', 
          filter: 'blur(8px)',
          top: 0,
          left: 0,
        }}
      ></div>


      {/* Profile Info Section */}
      <div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6 py-8 bg-gradient-to-t from-black/70 to-transparent"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          {/* Profile Image */}
          <motion.div
            className="w-60 h-60 rounded-full border-4 border-white shadow-xl mx-auto mb-6"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={selectedData.image} alt={selectedData.name} className="w-full h-full object-cover rounded-full" />
          </motion.div>

          <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-4">{selectedData.name}</h1>
          <p className="text-2xl font-semibold mb-6">{selectedData.company}</p>
          <p className="text-lg text-gray-300 mb-8">{selectedData.position}</p>

          <motion.a
            href={selectedData.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaLink className="text-xl" />
            Visit Website
          </motion.a>


          {/* Scroll down prompt */}
          {!isAtBottom && (
            <motion.div
              className="mt-6 cursor-pointer text-center flex flex-col justify-center items-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaAngleUp className="text-3xl text-white" />
              <p className="text-white text-lg mt-2">Scroll For more Info</p>
            </motion.div>
          )}
        </motion.div>
      </div>


      {/* Gray Overlay Section */}
      <motion.div
        className="absolute top-0 left-0 w-full flex flex-col items-center justify-center py-8 text-white transition-all duration-300 bg-gray-800"
        style={{
          position: 'relative',
          top: scrollY > 600 ? '0' : '0',
          zIndex: 10,
        }}
      >
        
        <div className="max-w-5xl flex flex-col items-center px-6 space-y-6">
          {/* Name and Position */}
          <div className="text-center">
            <h2 className="text-4xl font-extrabold">{selectedData.name}</h2>
            <p className="text-xl font-semibold text-gray-300">{selectedData.position} at {selectedData.company}</p>
            <p className="text-lg text-gray-400">{selectedData.location}</p>
          </div>


          {/* Bio Section */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full text-center">
            <h3 className="text-2xl font-semibold mb-4">About {selectedData.name}</h3>
            <p className="text-lg text-gray-300">{selectedData.bio}</p>
          </div>


          {/* Offer Section */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full text-center">
            <h3 className="text-2xl font-semibold mb-4">What I Offer</h3>
            <p className="text-lg text-gray-300">{selectedData.offer}</p>
          </div>


          {/* Need Section */}
          <div className="bg-gray-600 p-6 rounded-lg shadow-2xl w-full text-center">
            <h3 className="text-2xl font-semibold mb-4">My Objective</h3>
            <p className="text-lg text-gray-300">{selectedData.Need}</p>
          </div>


          {/* Call to Action */}
          <div className="w-full text-center mt-6">
            <p className="text-xl font-semibold text-white">{selectedData.CallToAction}</p>
          </div>
        </div>
      </motion.div>


      {/* Scroll to top button */}
      {scrollY > 600 && (
        <motion.div
          className="fixed bottom-8 right-8 cursor-pointer bg-blue-600 p-4 rounded-full shadow-xl z-20"
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
        >
          <FaAngleUp className="text-2xl text-white" />
        </motion.div>
      )}
    </div>
  );
};

export default User;
