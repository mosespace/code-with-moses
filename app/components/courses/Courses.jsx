"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { LuBookOpen } from "react-icons/lu";
import Demo2 from "../../../public/demo2.jpg";

export default function Courses() {
  const mainContainer = useRef(null);
  // console.log(mainContainer);
  const subContainer = useRef(null);
  // console.log(subContainer);

  const course = [
    {
      courseImage: Demo2,
      courseName: "Code With Antonio Clone",
      courseChapters: "25",
      coursePrice: "Free",
    },
    {
      courseImage: Demo2,
      courseName: "Chat GPT Clone",
      courseChapters: "5",
      coursePrice: "UGX 35,000",
    },
    {
      courseImage: Demo2,
      courseName: "Code With Antonio Clone",
      courseChapters: "25",
      coursePrice: "Free",
    },
    {
      courseImage: Demo2,
      courseName: "Full Stack Inventory",
      courseChapters: "5",
      coursePrice: "UGX 1,500,000",
    },
    {
      courseImage: Demo2,
      courseName: "Code With Antonio Clone",
      courseChapters: "25",
      coursePrice: "Free",
    },
    {
      courseImage: Demo2,
      courseName: "Chat GPT Clone",
      courseChapters: "5",
      coursePrice: "UGX 35,000",
    },
    {
      courseImage: Demo2,
      courseName: "Code With Antonio Clone",
      courseChapters: "25",
      coursePrice: "Free",
    },
    {
      courseImage: Demo2,
      courseName: "Full Stack Inventory",
      courseChapters: "5",
      coursePrice: "UGX 1,500,000",
    },
  ];

  // useEffect(() => {
  //   gsap.to(
  //     mainContainer.current,
  //     {
  //       scrollTrigger: {
  //         trigger: mainContainer.current,
  //         toggleActions: "restart pause resume restart",
  //       },
  //       // opacity: 0,
  //       duration: 3,
  //       y: 400,
  //     }
  //     // {
  //     //   opacity: 1,
  //     //   y: 0,
  //     //   duration: 1,
  //     //   scrollTrigger: {
  //     //     start: "top 10%",
  //     //     end: "bottom 0",
  //     //     scrub: 0.6,
  //     //   },
  //     // }
  //   );
  // }, []);
  return (
    <div
      // ref={mainContainer}
      className='grid grid-cols-1 lg:mb-11 gap-2 lg:gap-1 lg:grid-cols-4'
    >
      {course.map((course, i) => (
        <Link
          key={i}
          href='/course'
          className='flex flex-col justify-between hover:bg-slate-200 hover:transition-all px-4 py-3 rounded-md'
          // ref={subContainer}
        >
          <div className='flex flex-col'>
            <Image
              width={1280}
              height={1280}
              src={course.courseImage}
              alt='Code With Moses'
              className='h-2/3 object-center object-cover bg-slate-300 rounded-md'
            />
            <div className='flex flex-col ga-2 mt-2'>
              <h3 className='font-semibold text-xl'>{course.courseName}</h3>
              <p className='text-sm'>Kisakye Moses</p>
              <div className='flex gap-2 items-center mt-3'>
                <div className='rounded-full bg-amber-500 p-[3.5px]'>
                  <LuBookOpen className='w-4 h-4' />
                </div>
                <span className='text-sm'>
                  {course.courseChapters} Chapters
                </span>
              </div>
            </div>
          </div>
          <div>
            <span className='font-semibold'>{course.coursePrice}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
