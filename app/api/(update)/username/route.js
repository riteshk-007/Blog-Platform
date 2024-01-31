import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const PATCH = async (req) => {
  const { id, name } = await req.json();
  try {
    const update = await prisma.user.update({
      where: { id },
      data: { name },
      select: { id: true, name: true },
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
      message: "User updated successfully",
      data: update,
    });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message: `Failed to update user: ${error.message}`,
    });
  }
};
