import React from "react";
import Image from "next/image";
import { FiLogIn } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import MyImage from "../public/mosespace.jpg";

export default function NavBar() {
  return (
    <nav className='flex fixed top-0 left-0 right-0 z-[230] bg-white items-center gap-[8rem] py-[1.1rem] px-8 border-b border-slate-300 w-full'>
      <div className='font-semibold text-lg tracking-wide items-center flex gap-3'>
        <Image
          width={400}
          height={400}
          src={MyImage}
          className='w-[9%] h-auto object-cover rounded-full'
          alt='code with moses | Kampala Uganda Website Developer'
        />
        <h2>CodeWithMoses</h2>
      </div>
      {/* Search Form */}
      <div className='flex justify-start items-center relative w-full'>
        <input
          className='text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded-md border-gray-300  outline-none'
          type='text'
          placeholder='Search'
        />
        <div className='absolute right-3 z-10 cursor-pointer'>
          <GoSearch className='w-6 h-6 text-gray-600' />
        </div>
      </div>

      {/* Login button */}
      <button className='flex items-center gap-1 px-2 py-1 border border-slate-300 rounded-md font-semibold'>
        <FiLogIn />
        <span>Login</span>
      </button>
    </nav>
  );
}
