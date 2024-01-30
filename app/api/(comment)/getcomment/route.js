import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { postId } = await req.json();
    if (!postId) {
      return NextResponse.json({
        status: 400,
        message: "please provide postId",
      });
    }
    const comments = await prisma.comment.findMany({
      where: {
        postId,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!comments) {
      return NextResponse.json({
        status: 400,
        message: "comments not found",
      });
    }
    return NextResponse.json({
      status: 200,
      message: "comments fetched successfully",
      data: comments,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
