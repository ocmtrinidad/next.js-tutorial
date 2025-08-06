// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// // Two ways to create middleware:
// // 1. A function that returns a NextResponse with a matcher config
// // 2. Conditional statement that checks the request URL and returns a NextResponse.redirect() or rewrite().
// // redirect() changes the URL in the browser, while rewrite() keeps the URL but changes the content served.
// export function middleware(request: NextRequest) {
//   // return NextResponse.redirect(new URL("/", request.url));

//   // if (request.nextUrl.pathname === "/profile") {
//   //   return NextResponse.redirect(new URL("/", request.nextUrl));
//   // }

//   // Cookies and headers.
//   const response = NextResponse.next();
//   const themePreference = request.cookies.get("theme");
//   if (!themePreference) {
//     response.cookies.set("theme", "dark");
//   }
//   response.headers.set("custom-header", "custom-value");

//   return response;
// }

// // export const config = {
// //   matcher: "/profile",
// // };

import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

// Protecting pages with middleware.
export default withAuth(
  function middleware(request) {
    if (
      request.nextUrl.pathname.startsWith("/CreateUser") &&
      request.nextauth?.token?.role != "admin"
    ) {
      // new URL("input", "base"). This creates a new URL by checking the base URL, then modifying the path based on the input.
      return NextResponse.rewrite(new URL("/Denied", request.url));
    }
  },
  {
    // If user is authorized, give token
    callbacks: {
      // !! means NOT NULL
      authorized: ({ token }) => !!token,
    },
  }
);

// Protects the /CreateUser route from users who are not logged in.
export const config = {
  matcher: ["/CreateUser"],
};
