import React from "react";
import Video from "../components/courses/course/Video";
import Course from "../components/courses/course/Course";
import Description from "../components/courses/course/Description";

export default function page() {
  return (
    <div className='lg:py-8 lg:px-4 px-4'>
      <div className='flex px-0 flex-col lg:grid lg:grid-flow-col gap-4 lg:gap-8 overflow-hidden'>
        <div className='row-span-full isolate flex flex-col overflow-hidden w-full lg:gap-4 lg:mb-8'>
          <Video />
          <Description />
        </div>

        <div className='row-span-auto'>
          <div className='isolate flex-grow rounded-md gap-5 flex'>
            <Course />
          </div>
        </div>
      </div>
    </div>
  );
}
