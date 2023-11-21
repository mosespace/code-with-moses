import React from "react";
import Discord from "../../Components/Discord";
import { RiDiscordLine } from "react-icons/ri";

export default function page() {
  return (
    <div className='bg-radial-gradient bg-cover flex items-center justify-center text-white h-full'>
      <Discord
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
