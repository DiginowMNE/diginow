import { NextResponse } from "next/server";

export function middleware(request) {
  // Get the pathname of the request (e.g. /, /about, /services)
  const pathname = request.nextUrl.pathname;

  // If it's the root path, redirect to the default language
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/sr", request.url));
  }
}

export const config = {
  matcher: "/",
};
