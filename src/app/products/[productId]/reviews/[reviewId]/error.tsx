"use client";
// error.tsx is ONLY "use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

const ErrorBoundary = (props: Props) => {
  const router = useRouter();

  // Recovering from errors
  const reload = () => {
    startTransition(() => {
      router.refresh();
      props.reset();
    });
  };

  // error.message is error message from page.tsx
  return (
    <div>
      <p>{props.error.message}</p>
      <button onClick={reload}>Try again</button>
    </div>
  );
};

export default ErrorBoundary;
