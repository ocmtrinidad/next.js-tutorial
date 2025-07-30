// npm i server-only
// server-only stops client code ("use client") from accessing server code
import "server-only";

export const serverFunction = () => {
  console.log("HELLO WORLD");
  return "SERVER RESULT";
};
