"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = [
    { title: "About Me", link: "#about" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between px-5 py-4 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 tracking-tight">
        Koray Özdemir
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-end flex-1 mx-3">
        <ul className="flex space-x-6 font-medium text-lg">
          {navLink.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group py-2"
              >
                {item.title}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden flex-1 justify-end mx-3">
        <RxHamburgerMenu
          className="text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-50 dark:bg-gray-900 p-5 shadow-lg">
          <ul className="flex flex-col space-y-4 text-center">
            {navLink.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-lg font-medium hover:text-blue-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Theme Toggle Button */}
      <button
        className="flex items-center justify-center p-2.5 rounded-full bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 active:scale-95 ml-4"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle Dark Mode"
      >
        {theme === "dark" ? (
          <MdOutlineWbSunny className="text-yellow-400 text-xl" />
        ) : (
          <MdOutlineModeNight className="text-blue-600 dark:text-blue-400 text-xl" />
        )}
      </button>
    </header>
  );
}