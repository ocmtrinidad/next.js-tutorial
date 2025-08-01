import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import Submit from "../components/submit";

export default function AddProductPage() {
  async function createProduct(formData: FormData) {
    // To use function as a server action
    "use server";
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    await addProduct(title, parseInt(price), description);
    redirect("/products-db");
  }

  return (
    <form action={createProduct} className="p-4 space-y-4 max-w-96">
      <label htmlFor="title">
        Title
        <input
          type="text"
          name="title"
          id="title"
          className="block w-full p-2 border rounded"
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          name="price"
          id="price"
          className="block w-full p-2 border rounded"
        />
      </label>
      <label htmlFor="description">
        Description
        <textarea
          name="description"
          id="description"
          className="block w-full p-2 border rounded"
        ></textarea>
      </label>
      <Submit />
    </form>
  );
}
