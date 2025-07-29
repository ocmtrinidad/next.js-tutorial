"use client";
// error.tsx is ONLY "use client"
// Used by:
// Sibling components NOT layout.tsx
// Child components
// error.tsx has to be above layout.tsx to work

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

const ErrorBoundary = ({ error, reset }: Props) => {
  const router = useRouter();

  // Recovering from errors
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  // error.message is error message from page.tsx
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reload}>Try again</button>
    </div>
  );
};

export default ErrorBoundary;
