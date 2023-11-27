import Courses from "./components/courses/Courses";
import SearchForm from "./components/SearchForm";
import FilterBtns from "./components/filter buttons/FilterBtns";

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
