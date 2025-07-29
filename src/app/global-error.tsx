"use client";

// global-error.tsx only works in production modes
// For handling errors in root
// Make this as simple as possible as it cannot be error handled

const GlobalError = () => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
};

export default GlobalError;
