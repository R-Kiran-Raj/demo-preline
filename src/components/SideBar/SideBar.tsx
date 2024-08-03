"use client";

import Image from "next/image";
import React, { useState } from "react";
import DashboardIcon from "../icons/DashboardIcon";
import ChartsIcon from "../icons/ChartsIcon";
import AdminIcon from "../icons/AdminIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
// import { useRouter } from 'next/router';
import Link from "next/link";
import SettingsIcon from "../icons/SettingsIcon";
import IntegrationsIcon from "../icons/IntegrationsIcon";

const SideBar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("chats");
  // const router = useRouter()

  const onMenuItemSelected = (e: string) => {
    setSelectedMenuItem(e);
    // if(e === "chats"){
    //     router.push('/workspace/chat')
    // } else if (e === "integrations"){
    //     router.push('/integrations')
    // }   else if (e === "admin"){
    //     router.push('/manage-users')
    // } else {
    //     router.push('/workspace/chat')
    // }
  };
  return (
    <aside className="z-30 overflow-hidden relative transition-width ease-in-out delay-75 duration-500 group bg-[#1F2430] rounded-2xl flex flex-col items-center w-64 mb-8 mr-5 cursor-pointer">
      <div className="flex flex-row items-center mt-6 px-2 mb-4">
        <Image
          className={""}
          src="../svg/brand-logo.svg"
          height={48}
          width={48}
          alt="brand logo"
        />
        <span className="text-base font-bold italic text-white font-serif ml-4 block visible">
          Event Attendance
        </span>
      </div>
      <Link
        href="/dashboard"
        onClick={(e) => onMenuItemSelected("dashboard")}
        className={`mt-3 rounded-lg flex flex-row items-center justify-start h-12 cursor-pointer w-[calc(100%-3rem)]  px-2 ${
          selectedMenuItem === "dashboard"
            ? "bg-white border border-[#1F8844] text-black"
            : "opacity-70"
        }`}
      >
        <DashboardIcon
          width="18"
          height="18"
          stroke={`${selectedMenuItem === "dashboard" ? "#1F8844" : "#ffffff"}`}
          fill={`${selectedMenuItem === "dashboard" ? "#1F8844" : "#ffffff"}`}
        />
        <span
          className={`text-xs font-semibold block ml-4 ${
            selectedMenuItem === "dashboard" ? " text-black" : "text-white"
          }`}
        >
          Dashboard
        </span>
      </Link>
      <Link
        href="/events"
        onClick={(e) => onMenuItemSelected("events")}
        className={`mt-3 rounded-lg flex flex-row items-center h-12 cursor-pointer w-[calc(100%-3rem)] justify-start px-2 ${
          selectedMenuItem === "events"
            ? "bg-white border border-[#1F8844] text-black"
            : "opacity-70"
        }`}
      >
        <IntegrationsIcon
          width="18"
          height="18"
          stroke={`${selectedMenuItem === "events" ? "#1F8844" : "#ffffff"}`}
          fill={`${selectedMenuItem === "events" ? "#1F8844" : "#ffffff"}`}
        />
        <span
          className={`text-xs font-semibold block ml-4 ${
            selectedMenuItem === "events" ? " text-black" : "text-white"
          }`}
        >
          Events
        </span>
      </Link>

      <Link
        href="/manage-users"
        onClick={(e) => onMenuItemSelected("admin")}
        className={`mt-3 rounded-lg flex flex-row items-center h-12 cursor-pointer w-[calc(100%-3rem)] justify-start px-2 ${
          selectedMenuItem === "admin"
            ? "bg-white border border-[#1F8844] text-black"
            : "opacity-70"
        }`}
      >
        <AdminIcon
          width="18"
          height="18"
          stroke={`${selectedMenuItem === "admin" ? "#1F8844" : "#ffffff"}`}
          fill={`${selectedMenuItem === "admin" ? "#1F8844" : "#ffffff"}`}
        />
        <span
          className={`text-xs font-semibold block ml-4 ${
            selectedMenuItem === "admin" ? " text-black" : "text-white"
          }`}
        >
          Manage Users
        </span>
      </Link>
      <Link
        href="/reports"
        onClick={(e) => onMenuItemSelected("reports")}
        className={`mt-3 rounded-lg flex flex-row items-center h-12 cursor-pointer w-[calc(100%-3rem)] justify-start px-2 ${
          selectedMenuItem === "reports"
            ? "bg-white border border-[#1F8844] text-black"
            : "opacity-70"
        }`}
      >
        <ChartsIcon
          width="18"
          height="18"
          stroke={`${selectedMenuItem === "reports" ? "#1F8844" : "#ffffff"}`}
          fill={`${selectedMenuItem === "reports" ? "#1F8844" : "#ffffff"}`}
        />
        <span
          className={`text-xs font-semibold block ml-4 ${
            selectedMenuItem === "reports" ? " text-black" : "text-white"
          }`}
        >
          Reports
        </span>
      </Link>
      <Link
        href="/settings"
        onClick={(e) => onMenuItemSelected("settings")}
        className={`mt-3 rounded-lg flex flex-row items-center h-12 cursor-pointer w-[calc(100%-3rem)] justify-start px-2 ${
          selectedMenuItem === "settings"
            ? "bg-white border border-[#1F8844] text-black"
            : "opacity-70"
        }`}
      >
        <SettingsIcon
          width="18"
          height="18"
          stroke={`${selectedMenuItem === "settings" ? "#1F8844" : "#ffffff"}`}
          fill={`${selectedMenuItem === "settings" ? "#1F8844" : "#ffffff"}`}
        />
        <span
          className={`text-xs font-semibold block ml-4 ${
            selectedMenuItem === "settings" ? " text-black" : "text-white"
          }`}
        >
          Settings
        </span>
      </Link>
      <div className="ml-6 rounded-lg bg-[#E9F3EC] w-12 h-12 flex items-center justify-center text-[#1F8844] font-bold mt-auto mb-2 cursor-pointer self-start">
        KR
      </div>

      <Link
        href="/profile"
        onClick={(e) => onMenuItemSelected("profile")}
        className={`className="transition-opacity delay-300 bg-[#030814] -z-10 rounded-lg flex flex-row items-center justify-center w-full h-16 cursor-pointer absolute px-4 mt-auto bottom-0 visible  justify-end" ${
          selectedMenuItem === "profile" ? "text-black" : "opacity-70"
        }`}
      >
        <span
          className={`transition-opacity delay-300 text-xs font-semibold visible ml-4 text-white px-4`}
        >
          My Profile
        </span>
        <RightArrowIcon
          width="6"
          height="10"
          stroke={"#1F8844"}
          fill={"none"}
        />
      </Link>
    </aside>
  );
};
export default SideBar;
