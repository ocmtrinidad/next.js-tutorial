import Products from "../components/product";
import Reviews from "../components/reviews";
import { Suspense } from "react";

// Streaming allows for UI to be rendered on a first come, first serve basis, improving performance.
// <Suspense></Suspense> allows for elements to be instantly rendered while components are loading. 
export default function ProductReviews() {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback={<p>Loading Product Details</p>}>
        <Products/>
      </Suspense>
      <Suspense fallback={<p>Loading Review Details</p>}>
        <Reviews/>
      </Suspense>
    </div>
  )
}