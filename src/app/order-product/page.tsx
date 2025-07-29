"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing Order");
    // router.back() to go back a page
    // router.forward() to go forward a page
    // router.replace() replaces current page in history stack
    router.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default OrderProduct;
