import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { content, userId, postId } = await req.json();
    if (!content || !userId || !postId) {
      return NextResponse.json({
        message: "please check your user details and try again later.",
        status: 400,
      });
    }
    const comment = await prisma.comment.create({
      data: {
        content,
        userId,
        postId,
      },
    });
    if (!comment) {
      return NextResponse.json({
        message: "comment not created",
        status: 400,
      });
    }
    return NextResponse.json({
      status: 201,
      message: "comment created successfully",
      data: comment,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
