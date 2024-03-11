import { getServerSession } from "next-auth/react";
import db from "@/utils/db";
import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function POST(request) {
  try {
    const session = await getServerSession({ req: request.req });
    console.log(session);
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized", user: null },
        { status: 401 }
      );
    }

    const { name, email, image, ...otherUserData } = await request.json();

    // Check if user email already exists
    const userExist = await prisma.user.findUnique({
      where: { email },
    });

    if (userExist) {
      return NextResponse.json(
        { message: "User Already exists", user: null },
        { status: 409 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        image,
        ...otherUserData,
      },
    });

    console.log(newUser);
    return NextResponse.json(newUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const users = await prisma.user.findMany({});
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to Fetch user", error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
