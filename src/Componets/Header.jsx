import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/801875F9E9505F1CCBC6.png";

function Header() {


  return (
    <div className="w-[212px] h-full bg-white fixed items-center justify-between flex flex-col py-1 px-1">
      <div className="w-full flex items-center justify-center flex-col">
        <div className="flex items-center justify-center gap-1 font-sans font-medium transition-all h-[6rem] border-b-[1px] border-gray-200 hover:border-emerald-500">
          <span className="text-emerald-400 hover:text-emerald-500 transition-all">Nityasha</span> <span>Dashboard</span>
        </div>
        <div className="w-full h-full pt-1 flex items-center justify-center px-4 flex-col gap-1">
          <NavLink to="/" className={({isActive}) => `${isActive && "bg-[#E8FAF4] text-emerald-500"} w-full h-8  rounded-[5px] flex items-center  px-2 dynamic-link`}>
            <svg width="24" height="24" viewBox="0 0 24 24" className="mr-[16px]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.66667 20V12H14.3333V20M5 9.6L12 4L19 9.6V18.4C19 18.8243 18.8361 19.2313 18.5444 19.5314C18.2527 19.8314 17.857 20 17.4444 20H6.55556C6.143 20 5.74733 19.8314 5.45561 19.5314C5.16389 19.2313 5 18.8243 5 18.4V9.6Z" stroke="#0F5533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span className="font-medium font-[Lexend] text-[16px]">My Dask</span> 
          </NavLink>
          <NavLink to="/Users" className={({isActive}) => `${isActive && "bg-[#E8FAF4] text-emerald-500"} w-full h-8  rounded-[5px] flex items-center  px-2 dynamic-link`}>
            <svg width="24" height="24" viewBox="0 0 24 24" className="mr-[16px]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.66667 20V12H14.3333V20M5 9.6L12 4L19 9.6V18.4C19 18.8243 18.8361 19.2313 18.5444 19.5314C18.2527 19.8314 17.857 20 17.4444 20H6.55556C6.143 20 5.74733 19.8314 5.45561 19.5314C5.16389 19.2313 5 18.8243 5 18.4V9.6Z" stroke="#0F5533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span className="font-medium font-[Lexend] text-[16px]">My Dask</span>
          </NavLink>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
