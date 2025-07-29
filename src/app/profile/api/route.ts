import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(_request: NextRequest) {
  // Accessing headers from the request.
  const headersList = await headers();
  console.log(headersList.get("Authorization"));
  // By default Response returns plain text, but by changing the headers content-type, we can return html.
  return new Response("<h1>Get Data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
