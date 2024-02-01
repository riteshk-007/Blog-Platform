import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async (req) => {
  const userId = await req.json();
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId.userId },
      include: { posts: true },
    });
    if (!user) {
      return NextResponse.json({
        status: 404,
        message: "User not found",
      });
    }
    // Get the posts related to the user
    const userPosts = await prisma.post.findMany({
      where: { userId: userId.userId },
    });
    // Delete the comments related to each post
    for (let post of userPosts) {
      await prisma.comment.deleteMany({
        where: { postId: post.id },
      });
    }
    // Delete the comments related to the user
    await prisma.comment.deleteMany({
      where: { userId: userId.userId },
    });
    // Delete the posts related to the user
    await prisma.post.deleteMany({
      where: { userId: userId.userId },
    });
    // Delete the user
    await prisma.user.delete({
      where: { id: userId.userId },
    });
    cookies().delete("authToken");
    return NextResponse.json({
      status: 200,
      message: "User and related posts and comments deleted successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
