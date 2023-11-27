import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import Common from "../components/(mentorship-and-discord)/Common";

export default function page() {
  return (
    <div className='bg-radial-gradient bg-cover flex items-center justify-center text-white h-full'>
      <Common
        title='Mentorship'
        description={[
          "Want to get mentored by Antonio? The cohort is open for,",
          <br key='line-break' />,
          "applications!",
        ]}
        link='/discord-link'
        linkTitle='Apply Today'
        icon={HiOutlineAcademicCap}
      />
    </div>
  );
}
