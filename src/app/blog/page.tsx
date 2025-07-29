import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog - Next.js Tutorial",
  },
};

const Blog = async () => {
  return <h1>My blog</h1>;
};

export default Blog;
