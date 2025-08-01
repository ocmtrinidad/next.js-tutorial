"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/react-form/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          price: price,
          description: description,
        }),
      });
      if (response.ok) {
        router.push("/products-db");
        return;
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-96">
      <label htmlFor="title">
        Title
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full p-2 border rounded"
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          name="price"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
          className="block w-full p-2 border rounded"
        />
      </label>
      <label htmlFor="description">
        Description
        <textarea
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full p-2 border rounded"
        ></textarea>
      </label>
      <button
        disabled={loading}
        className="block w-full p-2 bg-blue-500 rounded disabled:bg-gray-500"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
