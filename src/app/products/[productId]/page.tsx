// dynamicParams default to true. A true dynamicParams generates a html file in .next to serve if it isnt in generateStaticParams. A false dynamicParams returns a 404 error page.
// export const dynamicParams = false;

// generateStaticParams() is a Next.js feature that prerenders routes based on an array of params.
export async function generateStaticParams() {
  return [
    {
      productId: "1"
    },
    {
      productId: "2"
    },
    {
      productId: "3"
    }
  ]
}

const ProductDetails = async ({ params }: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  return <h1>Details about {productId} at {new Date().toLocaleTimeString()}</h1>;
};

export default ProductDetails;
