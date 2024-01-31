import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const PATCH = async (req) => {
  const { id, email } = await req.json();
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json({
        status: 404,
        message: "User not found",
      });
    }
    const emailCheck = await prisma.user.findUnique({
      where: { email },
    });

    if (emailCheck && emailCheck.id !== id) {
      return NextResponse.json({
        status: 400,
        message: "Email already taken",
      });
    }
    const update = await prisma.user.update({
      where: { id },
      data: { email },
      select: { id: true, email: true },
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
