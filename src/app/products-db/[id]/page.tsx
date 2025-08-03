import { getProduct } from "@/prisma-db";
import ProductEditFormPage from "./product-edit-form";
import { Product } from "../page";
import { notFound } from "next/navigation";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Of type Product OR Null
  const product: Product | null = await getProduct(parseInt(id));

  if (!product) {
    return notFound();
  }

  return <ProductEditFormPage product={product} />;
}
