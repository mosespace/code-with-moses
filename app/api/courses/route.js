import db from "@/utils/db";
import { NextResponse } from "next/server";

// Creating a course in the MongoDB
export async function POST(request) {
  try {
    const {
      title,
      slug,
      description,
      imageUrl,
      price,
      isPublished,
      userId,
      tag,
    } = await request.json();

    console.log(
      title,
      slug,
      description,
      imageUrl,
      price,
      isPublished,
      userId,
      tag
    );
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
    const newCourse = await db.course.create({
      data: {
        title,
        slug,
        description,
        imageUrl,
        price: parseFloat(price),
        isPublished,
        tag,
        userId,
      },
    });

    console.log(newCourse);

    return NextResponse.json(newCourse, {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error, message: "Failed to create a course" },
      { status: 500 }
    );
  }
}