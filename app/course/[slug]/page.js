// import React from "react";
// import { getData } from "@/utils/getData";
// import CreateForm from "@/app/components/administrator/CreateForm";

// export default async function page({ params: { id } }) {
//   console.log(id);
//   const courses = await getData("courses");
//   const slug = courses.map((course) => {
//     return course.slug;
//   });

//   const courseData = await getData(`courses/${slug}`);
//   // console.log(slug);
//   // console.log(courseData);
//   return (
//     <div className='lg:py-8 lg:px-4 px-4 py-10 flex items-center justify-center gap-4'>
//       <div className=''>
//         <CreateForm className='w-2/4' courses={courses} course={courseData} />
//       </div>
//     </div>
//   );
// }

import Video from "@/app/components/courses/course/Video";
import Course from "@/app/components/courses/course/Course";
import Description from "@/app/components/courses/course/Description";
import { getData } from "@/utils/getData";

export default async function page({ params: { slug } }) {
  // console.log(slug);

  const courses = await getData("courses");

  const course = courses.filter((course) => course.slug === slug);

  const videoPreview = course.videoUrl;
  return (
    <div className='lg:py-8 lg:px-4 px-4'>
      <div className='flex px-0 flex-col lg:grid lg:grid-flow-col gap-4 lg:gap-8 overflow-hidden'>
        <div className='row-span-full isolate flex flex-col overflow-hidden w-full lg:gap-4 lg:mb-8'>
          <Video src={videoPreview} />
          <Description course={course} />
        </div>

        <div className='row-span-auto'>
          <div className='isolate flex-grow rounded-md gap-5 flex'>
            <Course course={course} />
          </div>
        </div>
      </div>
    </div>
  );
}
