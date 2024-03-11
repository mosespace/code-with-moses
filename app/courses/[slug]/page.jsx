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
