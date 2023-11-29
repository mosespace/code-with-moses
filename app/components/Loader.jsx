import React from "react";

export default function Loader() {
  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <div
        className='inline-block h-8 w-8 text-center animate-spin rounded-full border-4 border-solid border-r-amber-500 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
      ></div>
      <div className='text-black font-bold'>
        Loading. This may take just a few seconds...
      </div>
    </div>
  );
}
