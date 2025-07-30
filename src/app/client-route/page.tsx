"use client";

import React from "react";
import { useTheme } from "../components/theme-provider";
// import { clientFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {
  const theme = useTheme();
  // const result = clientFunction();

  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>Client Route Page</h1>
      {/* <p>{result}</p> */}
    </>
  );
}
