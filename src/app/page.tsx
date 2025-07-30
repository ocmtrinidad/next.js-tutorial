// import styles from "./page.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1 className="text-red-600">Home</h1>
      <Link href={"/docs"} className="text-blue-500">
        Docs
      </Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/articles/breaking-news-123?lang=en"}>Read in English</Link>
      <Link href={"/articles/breaking-news-123?lang=fr"}>Read in French</Link>
    </>
  );
};

export default Home;
