const ProductDetailsLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  // const getRandomInt = (count: number) => {
  //   return Math.floor(Math.random() * count);
  // };
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading product");
  // }

  return (
    <>
      {children}
      <h2>Featured Products</h2>
    </>
  );
};

export default ProductDetailsLayout;
