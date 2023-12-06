"use client";
import { useState } from "react";
import Progress from "../Progress";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useSideBar } from "../../../Context/Context";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";

export default function StudentSideBar() {
  const { handleCloseToggle, isOpen } = useSideBar();

  const [activeLink, setActiveLink] = useState("Introduction");

  const router = useRouter();

  const handleButtonClick = (pathLink) => {
    router.push(pathLink);
    setActiveLink(pathLink);
    handleCloseToggle;
  };

  const pageLinks = [
    {
      pathTitle: "Introduction",
      pathLink: "/introduction",
      pathIcon: IoPauseCircleOutline,
    },
    {
      pathTitle: "Environment Setup",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
    {
      pathTitle: "Folder Setup",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
    {
      pathTitle: "Authentication",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
    {
      pathTitle: "NavBar",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
    {
      pathTitle: "Search Filter",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
    {
      pathTitle: "Category Filter",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
    {
      pathTitle: "Companion Creation Form",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
    {
      pathTitle: "Companion Creation API",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
    {
      pathTitle: "Companion Creation List",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
    {
      pathTitle: "Chat Header",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
    {
      pathTitle: "Chat UI",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
    {
      pathTitle: "Memory Service",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
    {
      pathTitle: "Chat API",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
    {
      pathTitle: "Strip UI",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
    {
      pathTitle: "Deployment",
      pathLink: "/",
      pathIcon: IoPlayCircleOutline,
    },
  ];
  return (
    <>
      {/* Desktop */}
      <div className='hidden z-[230] pb-4 lg:flex flex-col gap-4 fixed top-0 bottom-0 left-0 overflow-y-auto no-scrollbar right-0  w-[20%] border-r border-slate-300  text-black b bg-white'>
        <div className='flex flex-col pt-5 border-b border-slate-300 w-full bg-white sticky top-0 left-0 right-[80%]'>
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
          <div className='flex flex-col pt-2 fixed top-0 right-[20%] bg-white left-0 border-b border-r border-slate-200'>
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
          <div className='pt-10'>
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
                      ? "bg-green-300"
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
      </div>
    </>
  );
}
