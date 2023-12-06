"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { generateSlug } from "@/utils/generateSlug";
import TextInput from "../Form/TextInput";
import TextareaInput from "../Form/TextareaInput";
import VideoURL from "../Form/VideoURL";
import ToggleInput from "../Form/ToggleInput";
import SubmitButton from "../Form/SubmitButton";

export default function CreateChapterForm({
  currentCourse,
  course,
  setCurrentCourse,
  id,
}) {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
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
  const isPublished = watch("isPublished");
  const isPaid = watch("isPaid");
  // console.log(isPublished);
  // async function onSubmit(data) {
  //   const baseUrl = "http://localhost:3000";
  //   setLoading(true);
  //   // console.log(data);
  //   try {
  //     const response = await fetch(`${baseUrl}/api/chapters`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     // console.log(response);
  //     if (response.ok) {
  //       setLoading(false);
  //       reset();
  //       setVideoUrl("");
  //       toast.success("Chapter Created");
  //       const chapterData = await response.json();
  //       // console.log(chapterData);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     // console.log(error);
  //   }
  // }
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  async function handleEdit(data) {
    setLoading(true);
    console.log(data);
    const response = await fetch(`${baseUrl}/api/courses/preview/${id}`, {
      cache: "no-store",
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log("Edited Successfully");
      setLoading(false);
    } else {
      setLoading(false);
      console.log("Failed to edit course");
    }
  }
  async function onSubmitCreate(data) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    setLoading(true);

    console.log(data);
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.userId = userId;
    data.imageUrl = imageUrl;

    try {
      const response = await fetch(`${baseUrl}/api/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setLoading(false);
        reset();
        setImageUrl("");
        toast.success("Course Created");
        const courseData = await response.json();
        setCurrentCourse(courseData);
        // console.log(courseData);
      } else if (response.status === 409) {
        setLoading(false);
        toast.error("Course with this title already exists");
      }
    } catch (error) {
      setLoading(false);
      // console.log(error);
    }
  }
  const onSubmit = id ? handleEdit : onSubmitCreate;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        {/*Chapter Title */}
        <TextInput
          label='Chapter Title'
          name='chapter-title'
          register={register}
          errors={errors}
        />

        {/* Select Course */}
        <div className='w-full'>
          <label
            htmlFor='course'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Select Course
          </label>
          <div className='mt-2'>
            <select
              // defaultValue={id ? course.courseId : ""}
              defaultValue={""}
              {...register("courseId")}
              id='course'
              name='course'
              autoComplete='course-name'
              className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:max-w-xs sm:text-sm sm:leading-6'
            >
              {/* <option value={currentCourse.id}>{currentCourse.title}</option> */}
              <option>Trello Clone</option>
              <option>Trello Clone</option>
              <option>Trello Clone</option>
            </select>
          </div>
        </div>

        {/* Chapter Description */}
        <TextareaInput
          label='Chapter Description'
          name='chapter-description'
          register={register}
          errors={errors}
        />

        {/* Video Url*/}
        <VideoURL
          label='Video URL'
          name='video-url'
          register={register}
          id='videoUrl'
        />

        {/* Is Published*/}
        <ToggleInput
          label='Publish this chapter'
          name='isPublished'
          trueTitle='Active'
          falseTitle='Draft'
          register={register}
        />
      </div>

      {/* Submit Button */}
      <SubmitButton
        isLoading={loading}
        buttonTitle='Create Chapter'
        loadingButtonTitle='Creating Course Chapter please wait...'
      />
    </form>
  );
}
