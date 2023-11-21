import React from "react";
import Discord from "../../Components/Discord";
import { HiOutlineAcademicCap } from "react-icons/hi2";

export default function page() {
  return (
    <div className='bg-radial-gradient bg-cover flex items-center justify-center text-white h-full'>
      <Discord
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
