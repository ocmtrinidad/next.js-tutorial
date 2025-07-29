const ProductDetails = async ({ params }: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  return <h1>Details about {productId}</h1>;
};

export default ProductDetails;
