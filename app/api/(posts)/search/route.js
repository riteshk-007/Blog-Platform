import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const GET = async (req) => {
  try {
    const search = req.nextUrl.searchParams.get("q");
    const searchItem = await prisma.post.findMany({
      where: {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
    });
    return NextResponse.json({
      status: 200,
      message: "Posts fetched successfully",
      data: searchItem,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
