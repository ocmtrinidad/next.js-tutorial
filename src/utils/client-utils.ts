// npm i client-only
// client-only stops server code from accessing client code
import "client-only";

export const clientFunction = () => {
  console.log("HELLO WORLD");
  return "CLIENT RESULT";
};
