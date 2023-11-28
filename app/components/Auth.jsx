"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import MyImage from "../../public/mosespace.jpg";
import { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();

  const handleSignIn = async (provider) => {
    const result = await signIn(provider, {
      callbackUrl: process.env.base_URL,
    });

    // Check if the sign-in was successful
    if (result?.error) {
      // Handle error if needed
      console.error("Sign-in error:", result.error);
    } else {
      // Redirect to the homepage
      router.push("/");
    }
  };

  return (
    <div className='h-screen absolute top-0 bottom-0 left-0 right-0 z-[230] w-screen overflow-hidden'>
      {/* <!-- modal --> */}
      <div className='fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center'>
        <div className='relative container m-auto px-6'>
          <div className='m-auto md:w-7/12'>
            <div className='rounded-xl bg-white dark:bg-slate-950 shadow-xl'>
              <div className='p-8'>
                <div className='space-y-4'>
                  <div className='font-semibold text-lg tracking-wide items-center flex gap-3'>
                    <Image
                      width={400}
                      height={400}
                      src={MyImage}
                      className='w-[9%] h-auto object-cover rounded-full'
                      alt='code with moses | Kampala Uganda Website Developer'
                    />
                    <h2 className='font-bold text-white'>CodeWithMoses</h2>
                  </div>
                  <h2 className='mb-8 text-2xl text-cyan-900 dark:text-white font-bold'>
                    Log in to unlock the <br />
                    best of Learning.
                  </h2>
                </div>
                <div className='mt-10 grid space-y-4'>
                  <button
                    onClick={() => handleSignIn("github")}
                    className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'
                  >
                    <div className='relative flex items-center space-x-4 justify-center'>
                      <FaGithub className='absolute left-0 w-5 h-5 text-white' />
                      <span className='block w-max font-semibold tracking-wide text-gray-700 text-sm transition dark:text-white duration-300 group-hover:text-blue-600 sm:text-base'>
                        Continue with Github
                      </span>
                    </div>
                  </button>
                  <button className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'>
                    <div className='relative flex items-center space-x-4 justify-center'>
                      <img
                        src='https://www.svgrepo.com/show/475656/google-color.svg'
                        className='absolute left-0 w-5'
                        alt='google logo'
                      />
                      <span className='block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base'>
                        Continue with Google
                      </span>
                    </div>
                  </button>
                </div>
                <div className='mt-14 space-y-4 py-3 text-gray-600 dark:text-gray-400 text-center'>
                  <p className='text-xs'>
                    By proceeding, you agree to our{" "}
                    <Link href='/privacy-policy/' className='underline'>
                      Terms of Use
                    </Link>{" "}
                    and confirm you have read our{" "}
                    <Link href='/privacy-policy/' className='underline'>
                      Privacy and Cookie Statement
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
