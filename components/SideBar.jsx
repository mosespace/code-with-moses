"use client";
import React from "react";
import { TfiCup } from "react-icons/tfi";
import { RxDiscordLogo } from "react-icons/rx";
import { MdShareLocation } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { useRouter } from "next/navigation";

export default function SideBar() {
  const pageLinks = [
    { pathTitle: "Browse", pathIcon: MdShareLocation, pathLink: "/browse" },
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

  const router = useRouter();

  const handleButtonClick = (pathLink) => {
    router.push(pathLink);
  };
  return (
    <div className='py-4 flex flex-col gap-4'>
      {pageLinks.map((path, i) => {
        return (
          <button
            key={i}
            onClick={() => handleButtonClick(path.pathLink)}
            className='bg-slate-200 items-center w-full rounded-md px-3 py-3 flex gap-4'
          >
            <path.pathIcon className='w-5 h-5' />
            {path.pathTitle}
          </button>
        );
      })}
    </div>
  );
}
