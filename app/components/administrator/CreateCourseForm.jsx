import React, { useState } from "react";
import TextInput from "../Form/TextInput";
import { useForm } from "react-hook-form";
import PriceInput from "../Form/PriceInput";
import ImageInput from "../Form/ImageInput";
import { useSession } from "next-auth/react";
import ToggleInput from "../Form/ToggleInput";
import HashtagInput from "../Form/HashtagInput";
import SubmitButton from "../Form/SubmitButton";
import toast, { Toaster } from "react-hot-toast";
import TextareaInput from "../Form/TextareaInput";
import { generateSlug } from "@/utils/generateSlug";

export default function CreateCourseForm() {
  const { data: session } = useSession(); // Destructure session from useSession
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [Hashtag, setHashtag] = useState([]);

  // console.log(imageUrl);

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({});

  if (!session) {
    return null;
  }

  const userId = session?.user?.id; // Extract userId from session
  console.log(userId);

  const isFeatured = watch("isFeatured");
  const isPublished = watch("isPublished");

  async function onSubmit(data) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    setLoading(true);

    const slug = generateSlug(data.title);
    data.slug = slug;
    data.userId = userId;
    data.description = description;
    data.imageUrl = imageUrl;
    data.price = price;
    setHashtag([]);

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
        toast.success("Course added to database successfully");
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

        <HashtagInput
          setItems={setHashtag}
          items={Hashtag}
          itemTitle='#Hashtags'
        />

        {/* Course Image */}
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint='courseImageUploader'
          label='Course Image'
        />
        <ToggleInput
          label='Publish your Course'
          name='isPublished'
          trueTitle='Active'
          falseTitle='Draft'
          register={register}
        />
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
