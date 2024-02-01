import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (_) => {
  try {
    const authToken = cookies().delete("authToken");
    if (authToken === undefined) {
      return NextResponse.json({
        message: "User logout successfully",
        status: 200,
      });
    } else {
      return NextResponse.json({
        status: 400,
        message: "Please login to continue",
        data: authToken,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: error.message || "Something went wrong",
      status: 400,
    });
  }
};
