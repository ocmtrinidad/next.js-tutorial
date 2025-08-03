"use client";

import Submit from "../components/submit";
import { FormState, createProduct } from "../actions/products";
import { useActionState } from "react";

export default function AddProductPage() {
  const initialState: FormState = {
    errors: {},
  };

  // useActionState() allows for updating state based on result of form action.
  // state is how you use the initialState which consists of the errors that are returned by createProduct.
  // formAction is how you call createProduct.
  // isPending is similar to useFormStatus(), but useFormStatus() is specifically for forms, while isPending can be used for any action.
  // Shows errors, but works.
  const [state, formAction, isPending] = useActionState(
    createProduct,
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
