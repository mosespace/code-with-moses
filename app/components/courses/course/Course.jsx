"use client";
import Link from "next/link";
import Auth from "../../Auth";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { BsGithub, BsDiscord, BsYoutube } from "react-icons/bs";

export default function Course() {
  const { data: session } = useSession();
  const [signIn, setSignIn] = useState(false);

  function handleSignIn() {
    setSignIn(true);
  }
  function toggleSignInOff() {
    setSignIn(false);
  }
  return (
    // Enrollment Button
    <div className='flex flex-col gap-8 text-slate-50'>
      <div className='flex flex-col gap-2 text-sm font-semibold bg-radial-gradient rounded-md px-8 py-6 mt-3'>
        <h2 className='font-bold text-xl'>Ready to start building?</h2>
        <p>
          Track your progress, watch with subtitles, change quality & speed, and
          more.
        </p>
        {session ? (
          <Link
            // href='/course/id'
            href={`/course/${session.user.id}`}
            className='bg-slate-200 text-black font-bold text-center w-full rounded-md px-3 py-3 text-sm'
          >
            Enroll For Free
          </Link>
        ) : (
          <button
            onClick={handleSignIn}
            className='bg-slate-200 text-black font-bold text-center w-full rounded-md px-3 py-3 text-sm'
          >
            Enroll For Free
          </button>
        )}
      </div>

      {signIn ? <Auth toggleSignInOff={toggleSignInOff} /> : ""}

      {/* Social Media Buttons */}
      <div className='flex flex-col lg:flex-row gap-4 justify-between text-black pb-8 lg:py-0'>
        <Link
          href='/discord'
          className='group py-4 px-[1.5rem] lg:px-[3.3rem] border border-slate-200 rounded-md flex lg:flex-col  justify-center lg:justify-normal lg:gap-2 gap-8 items-center'
        >
          <BsGithub className='w-8 h-8 text-black group-hover:opacity-50 group-hover:transition-all' />
          <span className='group-hover:text-slate-500 group-hover:transition-all'>
            GitHub
          </span>
        </Link>
        <Link
          href='/discord'
          className='group py-4 px-[1.5rem] lg:px-[3.3rem] border border-slate-200 rounded-md flex lg:flex-col  justify-center lg:justify-normal lg:gap-2 gap-8 items-center'
        >
          <BsDiscord className='text-indigo-500  w-8 h-8 group-hover:opacity-50 group-hover:transition-all' />
          <span className='group-hover:text-slate-500 group-hover:transition-all'>
            Discord
          </span>
        </Link>
        <Link
          href='/discord'
          className='group py-4 px-[1.5rem] lg:px-[3.3rem] border border-slate-200 rounded-md flex lg:flex-col  justify-center lg:justify-normal lg:gap-2 gap-8 items-center'
        >
          <BsYoutube className='text-red-500 w-8 h-8 group-hover:opacity-50 group-hover:transition-all' />
          <span className='group-hover:text-slate-500 group-hover:transition-all'>
            Youtube
          </span>
        </Link>
      </div>
    </div>
  );
}
