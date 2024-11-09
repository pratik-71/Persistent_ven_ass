import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FiServer } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/icons/logo.svg"

const Navbar = () => {
  const [showsearch, setshowsearch] = useState(false);
  const searchRef = useRef(null);
  const searchCloseRef = useRef(null);

  return (
    <div className="fixed top-0 w-full bg-opacity-80 backdrop-blur-md text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-12">
        <div className="flex gap-12 justify-center items-center">
        
         <img src={logo}/>


          <h1 className="text-[35px] font-Cormorant text-gray-300">
            Atlantic Crossing /<span className="text-white"> The Alliance</span>
          </h1>
        </div>

        <div className="flex gap-2 items-center justify-center">
          <IoIosSearch
            onClick={() => setshowsearch(true)}
            className="cursor-pointer text-3xl"
          />
          <button className="px-3 py-3 rounded-full bg-gray-600 cursor-pointer">
            <FiServer className="text-2xl" />
          </button>
          <button className="px-3 py-3 rounded-full bg-white cursor-pointer">
            <FaBars className="text-xl text-black" />
          </button>
        </div>

        {showsearch && (
          <div
            className="fixed top-0 left-0 z-50 w-full h-screen bg-gray-600 bg-opacity-70 flex justify-center items-center"
          >
            {showsearch && (
              <div
                className="fixed top-0 left-0 z-50 w-full h-screen bg-gray-600 bg-opacity-70 flex justify-center items-center"
              >
                <div className="absolute top-36"
                >
                  <button className="px-3 py-3 rounded-2xl bg-white flex items-center ">
                    <IoIosSearch className="text-amber-900 text-3xl" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className=" px-3 w-96 rounded-2xl bg-white text-amber-900 outline-none"
                    />
                    <button>
                      <IoMdClose
                        onClick={() => setshowsearch(false)}
                        className="bg-amber-900 text-2xl py-1 px-1 rounded-full"
                      />
                    </button>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
