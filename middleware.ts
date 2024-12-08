import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isAuthSuccessPage = path === "/auth-success";

  const token =
    request.cookies.get("jwt")?.value ||
    request.headers.get("Authorization")?.replace("Bearer ", "") ||
    null;

  const isPublicPath =
    path === "/login" || path === "/signup" || path === "/forgot-password";

  if (token && (isPublicPath || path === "/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token && !isPublicPath && !isAuthSuccessPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/profile",
    "/dashboard",
    "/auth-success",
    "/forgot-password",
  ],
};
