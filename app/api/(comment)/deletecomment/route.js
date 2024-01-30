import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { commentId } = await req.json();
    if (!commentId) {
      return NextResponse.json({
        status: 400,
        message: "please provide commentId",
      });
    }
    const comment = await prisma.comment.delete({
      where: {
        id: commentId,
      },
    });
    if (!comment) {
      return NextResponse.json({
        status: 400,
        message: "comment not found",
      });
    }
    return NextResponse.json({
      status: 200,
      message: "comment deleted successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
