import { getProducts } from "@/prisma-db";
import ProductsList from "./products-list";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDBPage() {
  const products: Product[] = await getProducts();

  return <ProductsList products={products} />;
}
