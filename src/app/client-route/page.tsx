"use client";

import { serverFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
  const result = serverFunction();
  return <h1>Client Route Page {result}</h1>;
}
