"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { useState, useEffect } from "react";

function ThemeColorMeta() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = "#0a0e17";
  }, [resolvedTheme]);

  return null;
}

export default function ThemeProviderWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} themes={["dark", "light"]}>
      <ThemeColorMeta />
      {children}
    </ThemeProvider>
  );
}
