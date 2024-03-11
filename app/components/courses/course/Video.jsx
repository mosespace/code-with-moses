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
        src={src || "https://www.youtube.com/watch?v=yci475Vwc10"}
      >
        <MediaProvider />
      </MediaPlayer>
    </div>
  );
}
