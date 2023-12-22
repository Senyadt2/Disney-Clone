import React from "react";
import disney from "../assets/Images/disney.png";
import marvel from "../assets/Images/marvel.png";
import nationalG from "../assets/Images/nationalG.png";
import pixar from "../assets/Images/pixar.png";
import star from "../assets/Images/starwar.png";

import disneyV from "../assets/Videos/disney.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import nationalV from "../assets/Videos/national-geographic.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import starV from "../assets/Videos/star-wars.mp4";
const ProductionHouse = () => {
  const productionList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
    },
    {
      id: 3,
      image: nationalG,
      video: nationalV,
    },
    {
      id: 4,
      image: pixar,
      video: pixarV,
    },
  ];
  return (
    <div className="flex flex-wrap md:flex-nowrap px-16 gap-5 mb-10">
      {productionList.map((item) => (
        <div className=" border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer">
          <img src={item.image} className=" md:w-full z-1 bg-gray-300" alt="" />
          <video
            src={item.video}
            autoPlay
            loop
            // controls
            playsInline
            className="absolute top-0  rounded-md z-0 opacity-0 hover:opacity-50"
          ></video>
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
