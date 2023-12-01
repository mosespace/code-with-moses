"use client";
import React, { useState } from "react";
import { TbLayoutDashboard, TbClipboard, TbPencil } from "react-icons/tb";
import CreateCourseForm from "./CreateCourseForm";

export default function CreateForm({ courses }) {
  const [displayedForm, setDisplayedForm] = useState("course");
  // console.log(displayedForm);
  const tabs = [
    {
      title: "Course Details",
      form: "course",
      icon: TbPencil,
    },
    {
      title: "Course Chapters",
      form: "chapter",
      icon: TbLayoutDashboard,
    },
    {
      title: "Course Attachments",
      form: "attachment",
      icon: TbClipboard,
    },
  ];
  function changeDisplayForm(form) {
    setDisplayedForm(form);
  }

  return (
    <section className='bg-white dark:bg-slate-900 rounded-md shadow-lg'>
      <div className='py-4 px-4 mx-auto'>
        <h2 className='text-slate-900 text-2xl mb-3'>Create a Course</h2>
        <div className='border-b border-gray-200 dark:border-gray-700 mb-6'>
          <ul className='flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <li key={i} className='mr-2'>
                  <button
                    onClick={() => changeDisplayForm(tab.form)}
                    className={
                      displayedForm === tab.form
                        ? "inline-flex items-center justify-center p-4 text-amber-600 border-b-2 border-amber-600 rounded-t-lg active dark:text-amber-500 dark:border-amber-500 group"
                        : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    }
                  >
                    <Icon className='mr-2 w-4 h-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300' />
                    {tab.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {displayedForm === "course" ? (
          <CreateCourseForm />
        ) : displayedForm === "chapter" ? (
          <CreateCourseForm courses={courses} />
        ) : (
          <CreateCourseForm courses={courses} />
        )}
      </div>
    </section>
  );
}
