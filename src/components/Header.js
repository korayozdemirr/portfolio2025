"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <header className="w-full flex justify-between p-5">
      <h1 className="text-xl font-bold">Koray Özdemir</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded dark:bg-blue-700"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Toggle {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
}
