"use client";

import { useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

type Props = {
  message: string;
};

const ErrorSimulator = ({ message }: Props) => {
  const [error, setError] = useState(false);
  if (error) {
    throw new Error(message);
  }

  return <button onClick={() => setError(true)}>Simulate Error</button>;
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div>
      <div>
        <ErrorSimulator message={"Simulated error in root layout"} />
      </div>
      {children}
    </div>
  );
};
