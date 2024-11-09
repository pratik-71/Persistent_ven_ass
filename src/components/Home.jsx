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
    <div className="py-10 bg-[#252A30] ont-Cormorant flex flex-col justify-center items-center h-screen ">
      <div className="flex justify-center items-center pl-4 pr-2 py-2 bg-[#36404D] gap-4 rounded-3xl">
        <FaEye className="text-xl text-orange-400" />

        <p className="text-lg  text-gray-200">Don't see yourself?</p>

        <p className="text-md text-gray-300">
          You may not have completed our intake form.
        </p>

        <Link to="/form">
          <button className="flex items-center justify-center gap-2 rounded-2xl bg-gray-100 px-2 py-2 text-[#5f4e39] text-sm font-semibold">
            <FaLink />
            INTAKE FORM
          </button>
        </Link>
      </div>

      <div className="px-4 py-12 flex flex-wrap gap-4">
        {imageData.map((item, index) => (
          <div
            key={item.index}
            className="relative w-[10rem] h-[16rem] hover:scale-110 duration-150"
          >
            <img
              src={item.image}
              alt={item.country}
              className="w-full h-full object-cover rounded-lg"
              onClick={() => handleClick(item.index)}
            />
            <div className="absolute bottom-0 left-0 w-full text-white px-4 py-2  bg-gradient-to-t from-black/90 to-transparent ">
              <h3 className="text-md text-nowrap font-semibold overflow-hidden px-2">
                {item.name}
              </h3>
              <p className="text-sm">{item.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
