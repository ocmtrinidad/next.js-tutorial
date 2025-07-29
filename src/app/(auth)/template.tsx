"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forgot Password",
    href: "/forgot-password",
  },
];

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const pathname = usePathname();

  // State is shared between urls when using layout.tsx. Use template.tsx if you want to reset.
  // template.tsx can be used INSIDE OF layout.tsx
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link) => {
        // For coloring selected links
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            style={
              isActive
                ? { fontWeight: "bold", color: "red" }
                : { color: "blue" }
            }
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default AuthLayout;
