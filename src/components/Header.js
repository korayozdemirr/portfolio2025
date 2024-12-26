"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineModeNight } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
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
       {/* Navigation Menu */}
       <nav className="flex flex-1 items-center justify-end">
        <ul className="flex space-x-6 font-medium text-lg">
          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Theme Toggle Button */}
      
      <button
        className="rounded text-xl mx-4"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
       {theme === "dark" ? <MdOutlineWbSunny /> : <MdOutlineModeNight />}
      </button>
    </header>
  );
}
