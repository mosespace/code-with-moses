import db from "@/utils/db";
import { NextResponse } from "next/server";

// Creating a course in the MongoDB
export async function POST(request) {
  try {
    const { title, description, videoUrl, isPublished, courseId } =
      await request.json();

    // console.log(title, description, videoUrl, isPublished, courseId);
    // const existingCourse = await db.course.findUnique({
    //   where: {
    //     slug,
    //   },
    // });

    // if (existingCourse) {
    //   return NextResponse.json(
    //     { message: "Slug already exists", error },
    //     { status: 409 }
    //   );
    // }

    const newChapter = await db.chapter.create({
      data: {
        title,
        description,
        videoUrl,
        isPublished,
        courseId,
      },
    });

    // console.log(newChapter);
    return NextResponse.json(newChapter, {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error, message: "Failed to create a chapter" },
      { status: 500 }
    );
  }
}

// Getting chapters from MongoDB
export async function GET() {
  try {
    const chapter = await db.chapter.findMany();

    return NextResponse.json(chapter);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to get a chapter",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
