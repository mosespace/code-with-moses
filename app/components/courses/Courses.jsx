import Link from "next/link";
import Image from "next/image";
import { LuBookOpen } from "react-icons/lu";

export default function Courses({ courses }) {
  // console.log(courses);
  return (
    <div className='grid grid-cols-1 lg:mb-11 gap-2 lg:gap-1 lg:grid-cols-4'>
      {courses?.map((course, i) => (
        <Link
          key={i}
          href={`/c/${course.slug}`}
          className='flex flex-col justify-between hover:bg-slate-200 hover:transition-all px-4 py-3 rounded-md'
          // ref={subContainer}
        >
          <div className='flex flex-col'>
            <Image
              width={1280}
              height={1280}
              src={course.imageUrl}
              alt='Code With Moses'
              className='h-2/3 object-center object-cover bg-slate-300 rounded-md'
            />
            <div className='flex flex-col ga-2 mt-2'>
              <h3 className='font-semibold text-xl'>{course.title}</h3>
              <p className='text-sm'>Kisakye Moses</p>
              <div className='flex gap-2 items-center mt-3'>
                <div className='rounded-full bg-amber-500 p-[3.5px]'>
                  <LuBookOpen className='w-4 h-4' />
                </div>
                <span className='text-sm'>
                  {course.chapters.length} Chapters
                </span>
              </div>
            </div>
          </div>
          <div>
            <span className='font-semibold'>UGX {course.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
