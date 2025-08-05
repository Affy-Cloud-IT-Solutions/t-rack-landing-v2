"use client";
import { useState, useEffect } from "react";
import { Menu, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleRedirect, REDIRECT_URL } from "@/config/api";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  // Check auth status and set up localStorage listener
  useEffect(() => {
    // Initial check
    checkAuthStatus();

    // Set up listener for storage changes
    const handleStorageChange = () => {
      checkAuthStatus();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Also check auth status when pathname changes (page navigation)
  useEffect(() => {
    checkAuthStatus();
  }, [pathname]);

  const checkAuthStatus = () => {
    if (typeof window !== "undefined") {
      const authToken = localStorage.getItem("authToken");
      const refreshToken = localStorage.getItem("refreshToken");
      const userRole = localStorage.getItem("userRole");

      const allTokensPresent = authToken && refreshToken && userRole;
      setIsLoggedIn(!!allTokensPresent);
    }
  };

 

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.clear();
    window.location.reload();
    setIsLoggedIn(false);
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Client", path: "/#clientspage" },
    { name: "Features", path: "/features" },
    { name: "Contact Us", path: "/contact" },
    { name: "Plans", path: "/plans" },
  ];

  return (
    <nav className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div>
          <Link href="/">
            <img src={"logo.jpeg"} alt="T-RACK Logo" className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm font-medium ${
                pathname === link.path
                  ? "text-[#125A88] underline underline-offset-4"
                  : "text-gray-800 hover:text-[#125A88] transition-colors"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={handleRedirect}
              className="text-gray-800 hover:text-[#125A88] transition-colors cursor-pointer"
              title="Profile"
            >
              <User className="w-5 h-5" />
            </button>
          ) : (
            <Link
              href="/login"
              className={`text-sm font-medium ${
                pathname === "/login"
                  ? "text-[#125A88] underline underline-offset-4"
                  : "text-gray-800 hover:text-[#125A88] transition-colors"
              }`}
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-[#125A88] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-sm font-medium ${
                pathname === link.path
                  ? "text-[#125A88] underline underline-offset-4"
                  : "text-gray-800 hover:text-[#125A88] transition-colors"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left py-2 text-sm font-medium text-gray-800 hover:text-[#125A88] transition-colors"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-sm font-medium ${
                pathname === "/login"
                  ? "text-[#125A88] underline underline-offset-4"
                  : "text-gray-800 hover:text-[#125A88] transition-colors"
              }`}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
