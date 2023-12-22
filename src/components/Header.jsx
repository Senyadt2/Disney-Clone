import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import user from "../assets/Images/user.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    { name: "WATCH LIST", icon: HiPlus },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center ">
        <img src={logo} alt="" className="w-[50px] md:w-[100px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => {
            return <HeaderItem name={item.name} Icon={item.icon} />;
          })}
        </div>
        <div className="flex md:hidden gap-8">
          {menu.map((item, index) => {
            return index < 3 && <HeaderItem name={""} Icon={item.icon} />;
          })}
        </div>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toggle ? (
            <div className="absolute mt-3 border-[1px] p-3 px-5 py-4">
              {menu.map((item, index) => {
                return (
                  index < 3 && <HeaderItem name={item.name} Icon={item.icon} />
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
      <div>
        <img src={user} alt="" className="w-[40px] rounded-full" />
      </div>
    </div>
  );
};

export default Header;
