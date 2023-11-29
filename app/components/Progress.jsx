import React from "react";

export default function Progress() {
  return (
    <div className=' flex flex-col gap-2 py-4 w-full'>
      <div className='border border-gray-200 rounded-full dark:border-200 h-[8px] mb-4'>
        <div
          className='bg-amber-500 h-[8px] rounded-full dark:bg-amber-500'
          style={{ width: "6%" }}
        ></div>
      </div>
      <span className='text-amber-500 font-semibold'>5% Complete</span>
    </div>
  );
}
