import React from "react";
import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import user_cirle from "../assets/user_circle.png";
const Dashboard = () => {
  return (
    <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px]">
      <div className="flex items-center rounded-[5px]">
        <input
          type="text"
          className="bg-[#f3f6f4] h-[40px] outline-none pl-4 w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
          placeholder="Search For ...."
        />
        <div className="bg-[#4e73df] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
          <FaSearch color="white" />
        </div>
      </div>
      <div className="flex items-center gap-[15px] relative">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
          <FaRegBell />
          <FaEnvelope />
        </div>
        <div className="flex items-center gap-[15px] relative">
          <p>Fajar Soegi</p>
          <div className="h-[50px] w-[50px] rounded-full bg-[#4e73df] cursor-pointer flex items-center justify-center relative">
            <img src={user_cirle} className="h-[50px] w-[50px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
