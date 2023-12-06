"use client";
import { useState } from "react";
import VideoURL from "../Form/VideoURL";
import { useForm } from "react-hook-form";
import TextInput from "../Form/TextInput";
import ToggleInput from "../Form/ToggleInput";
import SelectInput from "../Form/SelectInput";
import SubmitButton from "../Form/SubmitButton";
import TextareaInput from "../Form/TextareaInput";
import { makePostRequest } from "@/utils/apiRequest";


export default function CreateChapterForm({ courses, course }) {
  // console.log(course);
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const isPublished = watch("isPublished");

  async function onSubmit(data) {
    const courseId = course.id;
    // console.log(courseId);
    data.courseId = courseId;
    // console.log(data);
    makePostRequest(setLoading, "api/chapters", data, "Chapter", reset);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        {/*Chapter Title */}
        <TextInput
          label='Chapter Title'
          name='title'
          register={register}
          errors={errors}
        />

        {/* Select courses */}
        <SelectInput
          label='Select courses'
          name='courseId'
          register={register}
          errors={errors}
          className='w-full'
          options={courses}
        />

        {/* Chapter Description */}
        <TextareaInput
          label='Chapter Description'
          name='description'
          register={register}
          errors={errors}
        />

        {/* Video Url*/}
        <VideoURL label='Video URL' register={register} id='videoUrl' />

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
        loadingButtonTitle='Creating courses Chapter please wait...'
      />
    </form>
  );
}
