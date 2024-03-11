"use client";
import { useState } from "react";
import { MdAirplay } from "react-icons/md";
import Video from "../courses/course/Video";
import { PiLinkSimple } from "react-icons/pi";
import { HiPencilAlt } from "react-icons/hi";

export default function VideoURL({ label, name, register, id }) {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=LXb3EKWsInQ"
  );
  const [showPreview, setShowPreview] = useState(false);
  const toggleView = () => {
    setShowPreview(!showPreview);
  };
  // console.log(videoUrl);
  function resetPreview() {
    setVideoUrl("");
    setShowPreview(false);
  }
  return (
    <>
      <div className='col-span-full'>
        <div className='flex justify-between items-center mb-4'>
          <label
            htmlFor='Chapter-image'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            {label}
          </label>
          {videoUrl && showPreview && (
            <button
              onClick={resetPreview}
              type='button'
              className='flex space-x-2  bg-amber-600 rounded-md shadow text-slate-50  py-2 px-4'
            >
              <HiPencilAlt className='w-5 h-5' />
              <span>Change Video Link </span>
            </button>
          )}
        </div>
        {showPreview && videoUrl ? (
          <Video url={videoUrl} />
        ) : (
          <div className='flex col-span-full items-center'>
            <div className='relative w-full'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <PiLinkSimple className='w-5 h-5 text-slate-900' />
              </div>
              <input
                {...register("videoUrl")}
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                type='url'
                name={name}
                id={id}
                // defaultValue={id ? course.videoUrl : ""}
                defaultValue={""}
                className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 p-2.5    '
                placeholder='Enter Chapter Video Url...'
                required
              />
            </div>
            <button
              onClick={toggleView}
              type='button'
              className='p-2.5 flex items-center ml-2 text-sm font-medium text-slate-50 bg-amber-500 rounded-lg hover:bg-amber-600 focus:ring-4 
          space-x-3 focus:outline-none focus:ring-amber-300 shrink-0'
            >
              <MdAirplay className='w-5 h-5' />
              <span>Preview Video</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
