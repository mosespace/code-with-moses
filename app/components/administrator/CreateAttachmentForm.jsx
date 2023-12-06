import React, { useState } from "react";
import TextInput from "../Form/TextInput";
import { useForm } from "react-hook-form";
import SelectInput from "../Form/SelectInput";
import SubmitButton from "../Form/SubmitButton";
import { UploadDropzone } from "@/utils/uploadthing";
import { makePostRequest } from "@/utils/apiRequest";
import AttachmentFileInput from "../Form/AttachmentFileInput";

export default function CreateAttachmentForm({ courses, course }) {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  // console.log(fileUrl);
  async function onSubmit(data) {
    const courseId = course.id;
    // console.log(courseId);
    data.courseId = courseId;
    data.url = fileUrl;
    // console.log(data);
    makePostRequest(setLoading, "api/attachments", data, "Attachment", reset);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        {/* Title */}
        <TextInput
          label='Attachment Title'
          name='title'
          register={register}
          errors={errors}
        />

        {/* Select Course */}
        <SelectInput
          label='Select Course'
          name='courseId'
          register={register}
          errors={errors}
          className='w-full'
          options={courses}
        />

        {/* Upload thing */}
        <AttachmentFileInput
          endpoint='courseAttachmentUploader'
          fileUrl={fileUrl}
          register={register}
          setFileUrl={setFileUrl}
          label='Course Attachment'
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle='Create Attachment'
        loadingButtonTitle='Creating Attachment please wait...'
      />
    </form>
  );
}
