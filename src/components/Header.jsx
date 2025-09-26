import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Sun, Moon } from "lucide-react";
import useTheme from "./useTheme";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  const linkBase =
    "cursor-pointer font-medium transition-colors text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400";
  const activeCls = "text-primary-600 dark:text-primary-400";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md dark:bg-gray-900/90"
          : "bg-white/70 dark:bg-gray-900/70 backdrop-blur"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="flex-shrink-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-96}
              duration={500}
              className="cursor-pointer text-xl font-bold text-primary-600 dark:text-primary-400 md:text-2xl"
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <nav className="flex items-center space-x-6 text-gray-700 dark:text-gray-300">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-96}
                  duration={500}
                  className={linkBase}
                  activeClass={activeCls}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label={
                  theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-gray-300" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700" />
                )}
              </button>
            </nav>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden">
            <button
              onClick={toggleTheme}
              className="mr-2 rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="bg-white shadow-lg dark:bg-gray-900 md:hidden">
          <nav className="space-y-2 px-4 pb-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}
                className="block cursor-pointer py-2 font-medium text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                activeClass={activeCls}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
