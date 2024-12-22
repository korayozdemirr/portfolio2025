"use client";

import ThemeProviderWrapper from "./ThemeProviderWrapper";

export default function ClientWrapper({ children }) {
  return <ThemeProviderWrapper>{children}</ThemeProviderWrapper>;
}
