import { serverFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  const result = serverFunction();
  return <h1>Server Route Page {result}</h1>;
}
