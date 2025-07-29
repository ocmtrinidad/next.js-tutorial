import { NextRequest } from "next/server";
import { comments } from "../data";

// NAME MUST BE CAPITALIZED
// NextRequest is a built-in type in Next.js that provides methods for query parameters.
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  // Get the "query" parameter from the URL (?query=). Can be any string.
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
}

export async function POST(request: NextRequest) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  // Using Response constructor to change status code to 201, which indicates resource creation.
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
