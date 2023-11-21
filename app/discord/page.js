import React from "react";
import Common from "../../Components/(mentorship-and-discord)/Common";
import { RiDiscordLine } from "react-icons/ri";

export default function page() {
  return (
    <div className='bg-radial-gradient bg-cover flex items-center justify-center text-white h-full'>
      <Common
        title='Discord Community'
        description={[
          "Join the Discord community to chat with other students, ",
          <br key='line-break' />,
          "ask questions, and more.",
        ]}
        link='/discord-link'
        linkTitle='Discord'
        icon={RiDiscordLine}
      />
    </div>
  );
}
