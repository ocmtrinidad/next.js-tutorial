"use client";

import { usePathname } from "next/navigation";

// NotFound does not use props. Must use usePathname(). usePathname() is a "use client" hook
const NotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];

  return (
    <div>
      <h2>Product {productId} Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  );
};

export default NotFound;
