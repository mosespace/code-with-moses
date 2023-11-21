import React from "react";
import Image from "next/image";
import { FiLogIn } from "react-icons/fi";
import MyImage from "../public/mosespace.jpg";

export default function NavBar() {
  return (
    <nav className='flex fixed top-0 left-0 right-0 bg-white items-center gap-[8rem] py-[1.1rem] px-8 border-b border-slate-300 w-full'>
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
        <svg
          className='absolute right-3 z-10 cursor-pointer'
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z'
            stroke='#4B5563'
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21 21L15 15'
            stroke='#4B5563'
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      {/* Login button */}
      <button className='flex items-center gap-1 px-2 py-1 border border-slate-300 rounded-md font-semibold'>
        <FiLogIn />
        <span>Login</span>
      </button>
    </nav>
  );
}
