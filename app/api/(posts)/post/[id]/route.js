import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const GET = async (_, { params }) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: params.id,
      },
      include: {
        user: {
          select: { name: true, email: true },
        },
      },
    });
    return NextResponse.json({
      status: 200,
      message: "Posts fetched successfully",
      data: post,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
export const DELETE = async (_, { params }) => {
  try {
    const post = await prisma.post.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json({
      status: 200,
      message: "Post deleted successfully",
      data: post,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
