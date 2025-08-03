"use client";

import Submit from "@/app/components/submit";
import { FormState, editProduct } from "@/app/actions/products";
import { useActionState } from "react";
import { Product } from "../page";

export default function ProductEditFormPage({ product }: { product: Product }) {
  const initialState: FormState = {
    errors: {},
  };

  // This binds the product.id to editProduct() which will send editProduct() the product.id without having to use form inputs.
  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialState
  );

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full p-2 border rounded"
            defaultValue={product.title}
          />
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>

      <div>
        <label htmlFor="price">
          Price
          <input
            type="number"
            name="price"
            id="price"
            className="block w-full p-2 border rounded"
            defaultValue={product.price}
          />
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>

      <div>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            className="block w-full p-2 border rounded"
            defaultValue={product.description ?? ""}
          ></textarea>
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>

      <Submit />
    </form>
  );
}
