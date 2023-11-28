"use client";
import Auth from "./Auth";
import Link from "next/link";
import Image from "next/image";
import SearchForm from "./SearchForm";
import React, { useState } from "react";
import MyImage from "../../public/mosespace.jpg";
import toast, { Toaster } from "react-hot-toast";
import { IoMenu, IoClose } from "react-icons/io5";
import { Dropdown, Avatar } from "flowbite-react";
import { useSideBar } from "../../Context/Context";
import { FiLogIn, FiSettings } from "react-icons/fi";
import { signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();
  const [signIn, setSignIn] = useState(false);

  function handleSignIn() {
    setSignIn(true);
  }
  function toggleSignInOff() {
    setSignIn(false);
  }
  const { handleToggle, handleCloseToggle, isOpen } = useSideBar();
  // console.log(session);
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
        {session ? (
          <>
            <Dropdown
              label={
                <Avatar
                  className='w-14'
                  alt='User settings'
                  img={session.user.image}
                  rounded
                  bordered
                />
              }
              arrowIcon={false}
              inline
            >
              <Dropdown.Header className='w-56'>
                <span className='block text-sm'>
                  Hello <span className='font-bold'>{session.user.name}</span>
                </span>
                <span className='block truncate text-sm font-medium'>
                  {session.user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item className='flex gap-2'>
                <FiSettings /> Settings
              </Dropdown.Item>
              <Dropdown.Item
                className='flex gap-2'
                onClick={async () => {
                  try {
                    await signOut();

                    // Show success toast
                    toast.success("You have been signed out");
                  } catch (error) {
                    // Handle sign-out error
                    console.error("Sign-out error:", error);

                    // Show error toast
                    toast.error("Error signing out");
                  }
                }}
              >
                <FiLogIn />
                Log out
              </Dropdown.Item>
            </Dropdown>
          </>
        ) : (
          <button
            onClick={handleSignIn}
            className='flex items-center gap-1 px-2 py-1 border border-slate-300 rounded-md font-semibold'
          >
            <FiLogIn />
            <span>Login</span>
          </button>
        )}
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
        {session ? (
          <>
            <Dropdown
              label={
                <Avatar
                  className='w-14'
                  alt='User settings'
                  img={session.user.image}
                  rounded
                  bordered
                />
              }
              arrowIcon={false}
              inline
            >
              <Dropdown.Header className='w-56'>
                <span className='block text-sm'>
                  Hello <span className='font-bold'>{session.user.name}</span>
                </span>
                <span className='block truncate text-sm font-medium'>
                  {session.user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item className='flex gap-2'>
                <FiSettings /> Settings
              </Dropdown.Item>
              <Dropdown.Item
                className='flex gap-2'
                onClick={async () => {
                  try {
                    await signOut();

                    // Show success toast
                    toast.success("You have been signed out");
                  } catch (error) {
                    // Handle sign-out error
                    console.error("Sign-out error:", error);

                    // Show error toast
                    toast.error("Error signing out");
                  }
                }}
              >
                <FiLogIn />
                Log out
              </Dropdown.Item>
            </Dropdown>
          </>
        ) : (
          <>
            <Link
              href='/login'
              className='flex items-center gap-2 px-2 py-1 border border-slate-300 rounded-md font-semibold'
            >
              <FiLogIn className='w-5 h-5' />
              <span>Login</span>
            </Link>
          </>
        )}
      </nav>
      {signIn ? <Auth  toggleSignInOff={toggleSignInOff}/> : ""}
      <Toaster />
    </>
  );
}
