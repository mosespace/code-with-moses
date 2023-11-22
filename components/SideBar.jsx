"use client";
import { TfiCup } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import MyImage from "../public/mosespace.jpg";
import { RxDiscordLogo } from "react-icons/rx";
import { useSideBar } from "../Context/Context";
import { MdShareLocation } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { IoMailUnreadOutline } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import Image from "next/image";

export default function SideBar() {
  const { handleCloseToggle, isOpen } = useSideBar();

  const pageLinks = [
    { pathTitle: "Browse", pathIcon: MdShareLocation, pathLink: "/" },
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

  const [activeLink, setActiveLink] = useState("Browse");

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
          <div className={`${isOpen ? "flex justify-between" : "hidden"}`}>
            <div className='font-semibold text-lg tracking-wide items-center flex gap-3'>
              <Image
                width={400}
                height={400}
                src={MyImage}
                className='w-[7%] h-auto object-cover rounded-full'
                alt='code with moses | Kampala Uganda Website Developer'
              />
              <h2>CodeWithMoses</h2>
            </div>
            <button onClick={handleCloseToggle}>
              <IoClose className='w-7 h-7' />
            </button>
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

      <div className='hidden py-4 lg:flex flex-col gap-4 fixed top-0 bottom-0 left-0 overflow-y-auto no-scrollbar right-0 pt-24 w-[20%] border-r border-slate-300 px-5 text-black'>
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
    </>
  );
}
