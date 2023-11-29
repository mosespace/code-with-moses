import React from "react";
import { LuBookOpen } from "react-icons/lu";
import Progress from "../../Progress";

export default function Description() {
  const filters = [
    {
      filter: "Tailwind",
    },
    {
      filter: "React.js",
    },
    {
      filter: "Next.js",
    },
    {
      filter: "Prisma",
    },
    {
      filter: "MySQL",
    },
  ];

  return (
    <div className='py-4 px-[1rem] lg:px-[1.5rem] border text-black border-slate-200 rounded-md flex flex-col gap-2 items-start'>
      <div className='flex gap-2 items-center mt-3'>
        <div className='rounded-full bg-amber-500/40 p-[3.5px]'>
          <LuBookOpen className='w-4 h-4 text-amber-500' />
        </div>
        <span className='text-sm'>25 Chapters</span>
      </div>
      <h2 className='text-xl font-bold'>Trello Clone</h2>
      <p className=''>
        In this 12 hour tutorial you will learn how to create an end-to-end
        fullstack and trello clone, all with workspaces, boards, lists, cards,
        audit logs / activity as well as member roles.
      </p>
      <div className='py-1 flex flex-wrap gap-2 text-sm font-semibold mt-3'>
        {filters.map((filteredItem, i) => (
          <div key={i} className='px-4 py-1 border border-slate-200 rounded-lg'>
            {filteredItem.filter}
          </div>
        ))}
      </div>
      <Progress />
    </div>
  );
}
