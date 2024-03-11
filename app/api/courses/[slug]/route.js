import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { slug } }) {
  // console.log(slug);
  try {
    const course = await db.course.findUnique({
      where: {
        slug: slug,
      },
      include: {
        chapters: true,
      },
    });
    // console.log(course);
    return NextResponse.json(course);
  } catch (error) {
    console.error("Error fetching a single course:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch a single course",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
