import React from "react";
import { GoSearch } from "react-icons/go";

export default function SearchForm() {
  return (
    <>
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
    </>
  );
}
