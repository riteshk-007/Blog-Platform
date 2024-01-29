import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  const AuthToken = cookies().get("authToken")?.value || "";

  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/signup" ||
    request.nextUrl.pathname === "/api/post" ||
    request.nextUrl.pathname === "/api/search" ||
    /^\/api\/post\/\w+$/.test(request.nextUrl.pathname)
  ) {
    return null;
  }

  const loggedInUserNotAccessPath =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.nextUrl));
  }

  if (loggedInUserNotAccessPath) {
    // if user is logged in, redirect to home page
    if (AuthToken) {
      return NextResponse.redirect(new URL("/home", request.nextUrl));
    }
  } else {
    // if user is not logged in, redirect to login page
    if (!AuthToken) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json(
          { error: "You are not authorized" },
          { status: 401 }
        );
      } else if (!AuthToken && request.nextUrl.pathname.startsWith("/home")) {
        return NextResponse.redirect(new URL("/signup", request.nextUrl));
      } else if (!AuthToken && request.nextUrl.pathname.startsWith("/myblog")) {
        return NextResponse.redirect(new URL("/signup", request.nextUrl));
      }
    }
  }
}

export const config = {
  matcher: ["/", "/signup", "/myblog", "/api/:path*"],
};
