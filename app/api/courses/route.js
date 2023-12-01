import db from "@/utils/db";
import { NextResponse } from "next/server";

// Creating a course in the MongoDB
export async function POST(request) {
  try {
    const {
      title,
      imageUrl,
      price,
      userId,
      isPublished,
      isFeatured,
      description,
      slug,
    } = await request.json();
    const existingCourse = await db.course.findUnique({
      where: {
        slug,
      },
    });

    if (existingCourse) {
      return NextResponse.json(
        { message: "Slug already exists", error },
        { status: 409 }
      );
    }
    const newCourse = await db.course.create({
      data: {
        title,
        price: parseFloat(price),
        userId,
        isPublished,
        isFeatured,
        description,
        imageUrl,
        slug,
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
