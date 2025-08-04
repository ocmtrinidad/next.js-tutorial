"use client";

import Link from "next/link";
import { Product } from "./page";
import { removeProduct } from "../actions/products";
import { useOptimistic } from "react";
import Form from "next/form";

export default function ProductsList({ products }: { products: Product[] }) {
  // useOptimistic() allows for the UI to be optimistically updated.
  // It takes the current state (products) and a function that returns the a new  state (optimisticProducts).
  // setOptimisticProducts() is used to call the function that updates the state.
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    }
  );

  async function removeProductById(productId: number) {
    // setOptimisticProducts() runs before server action to display new state even if server is still working.
    setOptimisticProducts(productId);
    await removeProduct(productId);
  }

  return (
    <ul className="space-y-4 p-4">
      {optimisticProducts.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-black shadow-md rounded-lg text-white"
        >
          <h2 className="text-xl font-semibold">
            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
          </h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <Form action={removeProductById.bind(null, product.id)}>
            <button className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-800">
              Delete
            </button>
          </Form>
        </li>
      ))}
    </ul>
  );
}
