import React, { useState } from "react";
import TextInput from "../Form/TextInput";
import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import PriceInput from "../Form/PriceInput";
import ImageInput from "../Form/ImageInput";
import { useSession } from "next-auth/react";
import ToggleInput from "../Form/ToggleInput";
import HashtagInput from "../Form/HashtagInput";
import SubmitButton from "../Form/SubmitButton";
import TextareaInput from "../Form/TextareaInput";
import { generateSlug } from "@/utils/generateSlug";
import { makePostRequest } from "@/utils/apiRequest";

export default function CreateCourseForm() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState([]);

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({});

  if (!session || !session.user) {
    return null;
  }

  const userId = session?.user?.id; // Extracting userId from session

  const isPublished = watch("isPublished");

  async function onSubmit(data) {
    setLoading(true);
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.userId = userId;
    data.tags = tags;
    data.imageUrl = imageUrl;
    setTags([]);

    makePostRequest(setLoading, "api/courses", data, "Course", reset);
    setImageUrl("");
    // console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        {/* Course Title */}
        <TextInput
          label='Course Title'
          name='title'
          register={register}
          errors={errors}
        />

        {/* Course Price */}
        <PriceInput
          label='Course Price'
          name='price'
          placeholder='UGX 10000'
          register={register}
          errors={errors}
        />

        {/* Description */}
        <TextareaInput
          label='Course Description'
          name='description'
          register={register}
          errors={errors}
        />

        <HashtagInput setItems={setTags} items={tags} itemTitle='#Hashtags' />

        {/* Course Image */}
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint='courseImageUploader'
          label='Course Image'
        />

        {/* Published*/}

        <ToggleInput
          label='Publish your Course'
          name='isPublished'
          trueTitle='Active'
          falseTitle='Draft'
          register={register}
        />

        {/* Submit Button */}
        <SubmitButton
          isLoading={loading}
          buttonTitle='Create Course'
          loadingButtonTitle='Creating Course please wait...'
        />
      </div>
      <Toaster />
    </form>
  );
}
