import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { title, content, userId, image } = await req.json();
    if (!title || !content || !userId || !image) {
      return NextResponse.json({
        message: "Please fill all the fields",
        status: 400,
      });
    }
    const newpost = await prisma.post.create({
      data: {
        title,
        content,
        image,
        userId,
      },
    });

    return NextResponse.json({
      status: 201,
      message: "Post created successfully",
      data: newpost,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
export const GET = async (_) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: {
          select: { name: true, email: true },
        },
      },
    });
    if (!posts) {
      return NextResponse.json({
        status: 404,
        message: "Posts not found",
      });
    }
    return NextResponse.json({
      status: 200,
      message: "Posts fetched successfully",
      data: posts,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
