// "use client";
import React from "react";
import { Poster } from "@vidstack/react";
import ReactPlayer from "react-player/youtube";
import DemoImage from "../../../public/demo2.jpg";
import "@vidstack/react/player/styles/default/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import "@vidstack/react/player/styles/default/layouts/video.css";

export default function Video() {
  return (
    <div className='py-1 flex flex-col gap-2 text-sm font-semibold player-wrapper'>
      <MediaPlayer
        aspectRatio='16/9'
        title='Sprite Fight'
        controls
        autoplay
        src='https://www.youtube.com/watch?v=7rOMr_dz5so&pp=ygUSbmFuYSBqb3NodWEgYmFyYWth'
      >
        <MediaProvider />
        {/* <Poster
            class='absolute inset-0 block h-full w-full bg-black rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover'
            src='/demo2.jpg'
            alt='Girl walks into campfire with gnomes surrounding her friend ready for their next meal!'
          /> */}
        {/* </MediaProvider> */}
      </MediaPlayer>
    </div>
  );
}
