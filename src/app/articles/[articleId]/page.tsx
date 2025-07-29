"use client";

import Link from "next/link";
import { use } from "react";

const NewsArticle = ({ params, searchParams }: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) => {
  // use() for "use client" components, async/ await for server components
  const { articleId } = use(params);
  // url's ? is searchParams
  const { lang = "en" } = use(searchParams);

  return (
    <div>
      <h1>News artice {articleId}</h1>
      <p>Reading in {lang}</p>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
};

export default NewsArticle;
