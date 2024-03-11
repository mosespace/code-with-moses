import React from "react";

export default function FilterBtns() {
  const filters = [
    {
      filter: "All",
    },
    {
      filter: "Next.js",
    },
    {
      filter: "React.js",
    },
    {
      filter: "MySQL",
    },
    {
      filter: "MongoDB",
    },
    {
      filter: "Prisma",
    },
    {
      filter: "Tailwind",
    },
    {
      filter: "Node.Js",
    },
    {
      filter: "Superbase",
    },
  ];

  return (
    <div className='py-1 flex flex-wrap gap-2 text-sm font-semibold mt-3'>
      {filters?.map((filteredItem, i) => (
        <button
          key={i}
          className='px-4 py-1 bg-slate-200 hover:bg-slate-300 hover:transition-all rounded-lg'
        >
          {filteredItem.filter}
        </button>
      ))}
    </div>
  );
}
