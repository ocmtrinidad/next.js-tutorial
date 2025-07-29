import {
  notFound,
  // redirect
} from "next/navigation";
// import { Metadata } from "next";

// Dynamic Metadata Routing
// export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
//   const { productId } = await .params;
//   return {
//     title: `${productId} - Next.js Practice`,
//   };
// };

type Props = {
  params: Promise<{ productId: string; reviewId: string }>;
};

const ProuctReview = async ({ params }: Props) => {
  // const getRandomInt = (count: number) => {
  //   return Math.floor(Math.random() * count);
  // };
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }

  const { productId, reviewId } = await params;
  // Calls closest not-found.tsx
  if (parseInt(productId) > 100) {
    notFound();
    // redirect("/products");
  }
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
};

export default ProuctReview;
