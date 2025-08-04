import Form from "next/form";

export default function Search() {
  // Form component prefetches the action URL, handles the form submission, and shows the loading state
  return (
    <Form action="/products-db" className="flex gap-2">
      <input
        type="text"
        name="query"
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300"
        placeholder="Search products"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Submit
      </button>
    </Form>
  );
}
