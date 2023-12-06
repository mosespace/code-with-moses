// import CreateCourseForm from "@/app/components/administrator/CreateCourseForm";
import CreateForm from "@/app/components/administrator/CreateForm";
import React from "react";

export default function page({ params: { id } }) {
  return (
    <div className='lg:py-8 lg:px-4 px-4 py-10 flex items-center justify-center gap-4'>
      {/* <div>
        <span className='text-2xl font-bold'>
          Key Hints On Creating the Courses, Chapter and The Attachments
        </span>
      </div> */}
      <div className=''>
        <CreateForm className='w-2/4' />
      </div>
    </div>
  );
}
