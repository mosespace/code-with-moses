import Link from "next/link";
import Image from "next/image";
import Demo from "../../public/demo.jpg";
import Demo2 from "../../public/demo2.jpg";
import { LuBookOpen } from "react-icons/lu";

export default function Courses() {
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

  return (
    <div className='grid grid-cols-1 gap-2 lg:gap-1 lg:grid-cols-4'>
      {course.map((course, i) => (
        <Link
          key={i}
          href='/course'
          className='flex flex-col justify-between hover:bg-slate-200 hover:transition-all px-4 py-3 rounded-md'
        >
          <div className='flex flex-col'>
            <Image
              width={1280}
              height={1280}
              src={course.courseImage}
              alt='Code With Moses'
              className='h-2/3 object-center object-cover bg-red-700 rounded-md'
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
