"use client";
import React from "react";
import Image from "next/image";
import SearchForm from "./SearchForm";
import { FiLogIn } from "react-icons/fi";
import { IoMenu, IoClose } from "react-icons/io5";
import MyImage from "../../public/mosespace.jpg";
import { useSideBar } from "../../Context/Context";

export default function NavBar() {
  const { handleToggle, handleCloseToggle, isOpen } = useSideBar();
  // console.log(isOpen);
  return (
    <>
      {/* Desktop NavBar */}
      <nav className='hidden lg:flex fixed top-0 left-0 right-0 z-[230] bg-white items-center gap-[8rem] py-[1.1rem] px-8 border-b border-slate-300 w-full'>
        <div className='font-semibold text-lg tracking-wide items-center flex gap-3'>
          <Image
            width={400}
            height={400}
            src={MyImage}
            className='lg:w-[15%] w-[9%] h-auto object-cover rounded-full'
            alt='code with moses | Kampala Uganda Website Developer'
          />
          <h2 className='font-bold'>CodeWithMoses</h2>
        </div>
        {/* Search Form */}
        <SearchForm />

        {/* Login button */}
        <button className='flex items-center gap-1 px-2 py-1 border border-slate-300 rounded-md font-semibold'>
          <FiLogIn />
          <span>Login</span>
        </button>
      </nav>

      {/* Mobile NavBar */}
      <nav className='lg:hidden flex fixed top-0 left-0 right-0 z-[230] bg-white justify-between py-[1.1rem] border-b px-4 border-slate-300 w-full'>
        <button onClick={isOpen ? handleCloseToggle : handleToggle}>
          {isOpen ? (
            <IoClose className='w-7 h-7' />
          ) : (
            <IoMenu className='w-7 h-7' />
          )}
        </button>

        {/* Login button */}
        <button className='flex items-center gap-2 px-2 py-1 border border-slate-300 rounded-md font-semibold'>
          <FiLogIn className='w-5 h-5' />
          <span>Login</span>
        </button>
      </nav>
    </>
  );
}
