"use client";

import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="block w-full p-2 bg-blue-500 rounded disabled:bg-gray-500"
    >
      Submit
    </button>
  );
}
