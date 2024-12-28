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
    <header className="w-full flex items-center justify-between px-5 py-3 bg-gray-50 dark:bg-gray-900 shadow-md">
      <h1 className="text-xl font-bold">Koray Özdemir</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-end flex-1 mx-3">
        <ul className="flex space-x-6 font-medium text-lg">
          {navLink.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="relative text-gray-800 dark:text-gray-100 hover:text-blue-500 transition group"
              >
                {item.title}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all"></span>
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
        className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <MdOutlineWbSunny className="text-yellow-400 text-2xl" />
        ) : (
          <MdOutlineModeNight className="text-blue-500 text-2xl" />
        )}
      </button>
    </header>
  );
}