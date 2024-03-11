import { getData } from "@/utils/getData";
import SearchForm from "./components/SearchForm";
import Courses from "./components/courses/Courses";
import FilterBtns from "./components/filter buttons/FilterBtns";

export default async function Home() {
  const courses = await getData("courses");
  // console.log(courses);

  return (
    <div className='flex flex-col gap-4 py-4 px-4 lg:px-8 '>
      <div className='lg:hidden'>
        <SearchForm />
      </div>
      <FilterBtns />
      <Courses courses={courses} />
    </div>
  );
}
