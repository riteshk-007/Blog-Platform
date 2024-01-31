import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const PATCH = async (req) => {
  const { id, content } = await req.json();
  try {
    const update = await prisma.post.update({
      where: { id },
      data: { content },
      select: { id: true, content: true },
    });
    if (!update) {
      return NextResponse.json({
        status: 400,
        message:
          "An error occurred while processing your request. Please try again.",
      });
    }
    return NextResponse.json({
      status: 200,
      message: "Post updated successfully",
      data: update,
    });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message: `Failed to update post: ${error.message}`,
    });
  }
};
