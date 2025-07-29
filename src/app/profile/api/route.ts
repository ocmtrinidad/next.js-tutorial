import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(_request: NextRequest) {
  // Accessing headers from the request.
  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  // Two ways to create cookies:
  // 1. import { cookies } from "next/headers", then use await cookies().
  // 2. "Set-Cookie": "name=value" in the response headers.
  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "20");

  // Cookies are not available in the request object directly
  // Two ways to access cookies:
  // 1. cookieStore.get("name").
  // 2. request.cookies.get("name").
  // const theme = request.cookies.get("theme");
  console.log(cookieStore.get("resultsPerPage"));

  // By default, new Response returns a plain text, but by changing the headers content-type, we can return html.
  return new Response("<h1>Get Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
