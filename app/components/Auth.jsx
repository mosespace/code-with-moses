"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import MyImage from "../../public/mosespace.jpg";

export default function Auth({ toggleSignInOff }) {
  const router = useRouter();

  return (
    <div className='h-screen bg-white/30 absolute top-0 bottom-0 left-0 right-0 z-[250] w-screen'>
      {/* <!-- modal --> */}
      <div className='fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal justify-center items-center'>
        <div className='relative container m-auto px-6'>
          <div className='m-auto md:w-7/12'>
            <div className='rounded-xl bg-slate-950 shadow-xl'>
              <div className='p-8'>
                <div className='space-y-4'>
                  <div className='font-semibold text-lg tracking-wide flex items-center justify-between'>
                    <div className='flex gap-3'>
                      <Image
                        width={400}
                        height={400}
                        src={MyImage}
                        className='w-[9%] h-auto object-cover rounded-full'
                        alt='code with moses | Kampala Uganda Website Developer'
                      />
                      <h2 className='font-bold text-white'>CodeWithMoses</h2>
                    </div>
                    <button onClick={toggleSignInOff} className='text-white'>
                      <IoCloseSharp className='w-7 h-7' />
                    </button>
                  </div>
                  <h2 className='mb-8 text-2xl text-white font-bold'>
                    Log in to unlock the <br />
                    best of Learning. 😎
                  </h2>
                </div>
                <div className='mt-10 grid space-y-4'>
                  <button
                    onClick={async () => {
                      try {
                        // Show loading toast
                        toast.loading("Logging You In...");

                        // Sign in with the specified provider
                        await signIn("github", {
                          callbackUrl: process.env.NEXT_URL,
                        });

                        // Close the loading toast
                        toast.dismiss(loadingToast);

                        // Show success toast
                        toast.success("Login was successful");
                      } catch (error) {
                        // Handle errors here
                        console.error("Sign-in error:", error);

                        // Show error toast
                        toast.error("Error when logging in");
                      }
                    }}
                    className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400'
                  >
                    <div className='relative flex items-center space-x-4 justify-center'>
                      <FaGithub className='absolute left-0 w-5 h-5 text-white' />
                      <span className='block w-max font-semibold tracking-wide text-sm transition text-white duration-300 group-hover:text-blue-600 sm:text-base'>
                        Continue with Github
                      </span>
                    </div>
                  </button>
                </div>
                <div className='mt-10 space-y-4 py-3 text-gray-400 text-center'>
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
      <Toaster />
    </div>
  );
}
