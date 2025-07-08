"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthFlowModal from './AuthFlowModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Client", path: "/#clientspage" },
    { name: "Features", path: "/features" },
    { name: "Contact Us", path: "/contact" },
  ];
 const router = usePathname();
console.log(router)


  return (
    <nav className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <img
            src="https://t-racktool.com/static/media/MainLogo.f1fd5127fdae55feda4f.png"
            alt="T-RACK Logo"
            className="h-10"
          />
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={
                `text-sm font-medium ${
                  router===link.path
                    ? "text-[#125A88] underline underline-offset-4"
                    : "text-gray-800 hover:text-[#125A88]"
                }`
              }
            >
              {link.name}
            </Link>
          ))}
          <button  onClick={() => setOpen(true)} className="ml-4 border bg-[#125A88] border-gray-200 px-4 py-1 rounded-md hover:shadow-lg cursor-pointer shadow-blue-200 text-white text-sm">
            Get Started
          </button>
        </div>

<AuthFlowModal isOpen={open} onClose={() => setOpen(false)} />

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-sm font-medium ${
                  isActive
                    ? "text-[#125A88] underline underline-offset-4"
                    : "text-gray-800 hover:text-[#125A88]"
                }`
              }
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full mt-2 border border-gray-200 px-4 py-2 rounded-md hover:shadow text-gray-800 text-sm">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
