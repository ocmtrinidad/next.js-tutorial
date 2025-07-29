import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Two ways to create middleware:
// 1. A function that returns a NextResponse with a matcher config
// 2. Conditional statement that checks the request URL and returns a NextResponse.redirect() or rewrite().
// redirect() changes the URL in the browser, while rewrite() keeps the URL but changes the content served.
export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL("/", request.url));

  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.redirect(new URL("/", request.nextUrl));
  // }

  // Cookies and headers.
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value");

  return response;
}

// export const config = {
//   matcher: "/profile",
// };
