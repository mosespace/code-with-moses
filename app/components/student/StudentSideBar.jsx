"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TfiCup } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { RxDiscordLogo } from "react-icons/rx";
import { MdShareLocation } from "react-icons/md";
import MyImage from "../../../public/mosespace.jpg";
import { useSideBar } from "../../../Context/Context";
import { IoMailUnreadOutline } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import Progress from "../Progress";

export default function StudentSideBar() {
  const { handleCloseToggle, isOpen } = useSideBar();

  const pageLinks = [
    { pathTitle: "Working", pathIcon: MdShareLocation, pathLink: "/" },
    { pathTitle: "Leaderboard", pathIcon: TfiCup, pathLink: "/leaderboard" },
    { pathTitle: "Discord", pathIcon: RxDiscordLogo, pathLink: "/discord" },
    {
      pathTitle: "Mentorship",
      pathIcon: HiOutlineAcademicCap,
      pathLink: "/mentorship",
    },
    {
      pathTitle: "NewsLetter",
      pathIcon: IoMailUnreadOutline,
      pathLink: "/newsletter",
    },
  ];

  const [activeLink, setActiveLink] = useState("Working");

  const router = useRouter();

  const handleButtonClick = (pathLink) => {
    router.push(pathLink);
    setActiveLink(pathLink);
    handleCloseToggle;
  };

  return (
    <>
      {/* MobileSideBar */}
      <div
        className={`${
          isOpen
            ? "z-[230] w-full border-0 pt-16 backdrop-blur-[2px] bg-white/75"
            : "hidden"
        } lg:hidden py-4 flex flex-col gap-4 fixed top-0 bottom-0 left-0 overflow-y-auto no-scrollbar right-0 pt-24 w-[20%] border-r border-slate-300 px-5 text-black`}
      >
        <div
          className={`${
            !isOpen ? "hidden lg:block" : "w-[80%]"
          } py-4 flex flex-col gap-4 fixed top-0 bottom-0 left-0 overflow-y-auto no-scrollbar right-0 pt-24 w-[20%] border-r border-slate-300 bg-white px-5 text-black`}
        >
          <div className='flex flex-col pt-2 border-b border-slate-300 w-full'>
            <h2 className='font-bold px-5 flex items-center text-xl justify-between'>
              Trello Clone
              <button onClick={handleCloseToggle}>
                <IoClose className='w-7 h-7' />
              </button>
            </h2>
            <div className='px-5'>
              <Progress />
            </div>
          </div>
          {pageLinks.map((path, i) => {
            return (
              <button
                key={i}
                onClick={() =>
                  handleButtonClick(
                    path.pathLink,
                    path.pathTitle,
                    handleCloseToggle
                  )
                }
                className={`${
                  activeLink === path.pathTitle
                    ? "bg-slate-200"
                    : "hover:bg-slate-200"
                } items-center w-full rounded-md px-3 py-3 flex gap-4 mt-[.8rem]`}
              >
                <path.pathIcon className='w-5 h-5' />
                {path.pathTitle}
              </button>
            );
          })}
        </div>
      </div>
      {/* Desktop */}
      <div className='hidden z-[230] py-4 lg:flex flex-col gap-4 fixed top-0 bottom-0 left-0 overflow-y-auto no-scrollbar right-0  w-[20%] border-r border-slate-300  text-black b bg-white'>
        <div className='flex flex-col pt-5 border-b border-slate-300 w-full'>
          <h2 className='font-bold px-5'>Trello Clone</h2>
          <div className='px-5'>
            <Progress />
          </div>
        </div>
        <div className='px-5'>
          {pageLinks.map((path, i) => {
            return (
              <button
                key={i}
                onClick={() => handleButtonClick(path.pathLink, path.pathTitle)}
                className={`${
                  activeLink === path.pathTitle
                    ? "bg-slate-200"
                    : "hover:bg-slate-200"
                } items-center w-full rounded-md px-3 py-3 flex gap-4`}
              >
                <path.pathIcon className='w-5 h-5' />
                {path.pathTitle}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
