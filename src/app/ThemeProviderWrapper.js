"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeProviderWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Sunucu ve istemci uyuşmazlığı önlenir

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
