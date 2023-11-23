import Image from "next/image";
import Courses from "../Components/courses/Courses";
import SearchForm from "../Components/SearchForm";
import FilterBtns from "../Components/filter buttons/FilterBtns";

export default function Home() {
  return (
    <div className='flex flex-col gap-4 py-4 px-4 lg:px-8 '>
      <div className='lg:hidden'>
        <SearchForm />
      </div>
      <FilterBtns />
      <Courses />
    </div>
  );
}
