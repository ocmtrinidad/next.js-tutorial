import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docs - Next.js Tutorial",
};

type Props = {
  params: Promise<{ slug: string[] }>;
};

const Docs = async ({ params }: Props) => {
  // Use catch all segments "[...slug]" if page ui differs based on url, else just use normal structure
  // slug is the url
  const { slug } = await params;
  if (slug && slug.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}{" "}
      </h1>
    );
  } else if (slug && slug.length === 1) {
    return <h1>Viewing docs for feature {slug[0]} </h1>;
  }
  const docId = 1;
  // replace returns to "/" because it overwrites history
  return (
    <>
      <h1>Docs</h1>
      <Link href={"/"}>Home</Link>
      <Link href={`/docs/${docId}`}>Doc {docId}</Link>
      <Link href={"/docs/2"} replace>
        Doc 2
      </Link>
    </>
  );
};

export default Docs;
