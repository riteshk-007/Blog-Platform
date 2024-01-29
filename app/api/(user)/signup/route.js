import prisma from "@/DB/db.config";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();
    if ([name, email, password].some((filed) => filed?.trim() === "")) {
      return NextResponse.json({
        message: "Please fill all the fields",
        status: 400,
      });
    }
    if (password.length < 6) {
      return NextResponse.json({
        message: "Password should be minimum 6 characters",
        status: 400,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const emailCheck = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (emailCheck) {
      return NextResponse.json({
        message: "Email already exists",
        status: 400,
      });
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return NextResponse.json({
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 400 });
  }
};
