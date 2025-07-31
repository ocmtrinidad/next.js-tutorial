type Author = {
  id: number;
  name: string;
};

export default async function Author({ userId }: { userId: number }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user: Author = await response.json();

  return (
    <div className="text-sm text-white">
      Written by:{" "}
      <span className="font-semibold text-white hover:text-blue-300 transition-colors">
        {user.name}
      </span>
    </div>
  );
}
