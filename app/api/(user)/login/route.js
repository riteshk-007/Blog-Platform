import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import prisma from "@/DB/db.config";
export const POST = async (req) => {
  try {
    const { email, password } = await req.json();
    if ([email, password].some((filed) => filed?.trim() === "")) {
      return NextResponse.json({
        message: "Please fill all the fields",
        status: 400,
      });
    }
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found", status: 400 });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return NextResponse.json({ message: "Invalid password", status: 400 });
      }
      const authToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      cookies().set("authToken", authToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
      });
      return NextResponse.json({
        status: 200,
        message: "User logged in successfully",
        data: user,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: error.message || "Something went wrong",
      status: 400,
    });
  }
};

export const GET = async (req) => {
  try {
    const authToken = cookies().get("authToken")?.value || "";
    if (!authToken) {
      return NextResponse.json({
        message: "Please login to continue",
        status: 400,
      });
    }
    const data = jwt.verify(authToken, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: {
        id: data.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        posts: true,
      },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found", status: 400 });
    }

    return NextResponse.json({
      status: 200,
      message: "User fetch successfully",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message || "Something went wrong",
      status: 400,
    });
  }
};
