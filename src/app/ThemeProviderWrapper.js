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
    meta.content = resolvedTheme === "dark" ? "#0a0a0a" : "#ffffff";
  }, [resolvedTheme]);

  return null;
}

export default function ThemeProviderWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Sunucu ve istemci uyuşmazlığı önlenir

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["light", "dark"]}>
      <ThemeColorMeta />
      {children}
    </ThemeProvider>
  );
}
