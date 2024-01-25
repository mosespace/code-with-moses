// "use client";
import React from "react";
import "@vidstack/react/player/styles/default/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import "@vidstack/react/player/styles/default/layouts/video.css";

export default function Video({ src }) {
  return (
    <div className='py-1 flex flex-col gap-2 text-sm font-semibold player-wrapper'>
      <MediaPlayer
        aspectRatio='16/9'
        title='Sprite Fight'
        controls
        src={
          src ||
          "https://www.src.com/watch?v=7rOMr_dz5so&pp=ygUSbmFuYSBqb3NodWEgYmFyYWth"
        }
      >
        <MediaProvider />
      </MediaPlayer>
    </div>
  );
}
