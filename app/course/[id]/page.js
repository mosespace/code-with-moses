import React from "react";
import { getData } from "@/utils/getData";
import CreateForm from "@/app/components/administrator/CreateForm";

export default async function page({ params: { id } }) {
  const courses = await getData("courses");
  const slug = courses.map((course) => {
    return course.slug;
  });

  const courseData = await getData(`courses/${slug}`);
  // console.log(slug);
  // console.log(courseData);
  return (
    <div className='lg:py-8 lg:px-4 px-4 py-10 flex items-center justify-center gap-4'>
      <div className=''>
        <CreateForm className='w-2/4' courses={courses} course={courseData} />
      </div>
    </div>
  );
}
