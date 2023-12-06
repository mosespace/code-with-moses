import db from "@/utils/db";
import { NextResponse } from "next/server";

// Creating a course in the MongoDB
export async function POST(request) {
  try {
    const { title, url, courseId } = await request.json();

    const newChapter = await db.attachment.create({
      data: {
        title,
        url,
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
      { error, message: "Failed to create an attachment" },
      { status: 500 }
    );
  }
}

// Getting chapters from MongoDB
export async function GET() {
  try {
    const attachment = await db.attachment.findMany();

    return NextResponse.json(attachment);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to get an attachment",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
