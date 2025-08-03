import { getProducts } from "@/prisma-db";
import Link from "next/link";
import { removeProduct } from "../actions/products";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDBPage() {
  const products: Product[] = await getProducts();

  return (
    <ul className="space-y-4 p-4">
      {products.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-black shadow-md rounded-lg text-white"
        >
          <h2 className="text-xl font-semibold">
            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
          </h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <form action={removeProduct.bind(null, product.id)}>
            <button className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-800">
              Delete
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
}
