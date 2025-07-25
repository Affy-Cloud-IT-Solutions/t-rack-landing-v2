// "use client"
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [open, setOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Our Client", path: "/#clientspage" },
//     { name: "Features", path: "/features" },
//     { name: "Contact Us", path: "/contact" },
//     { name: "Plans", path: "/plans" },
//     { name: "Login", path: "/login" },
//   ];
//  const router = usePathname();
// console.log(router)


//   return (
//     <nav className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <div>
//           <img
//             src="https://t-racktool.com/static/media/MainLogo.f1fd5127fdae55feda4f.png"
//             alt="T-RACK Logo"
//             className="h-10"
//           />
//         </div>

//         <div className="hidden md:flex space-x-6 items-center">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.path}
//               className={
//                 `text-sm font-medium ${
//                   router===link.path
//                     ? "text-[#125A88] underline underline-offset-4"
//                     : "text-gray-800 hover:text-[#125A88]"
//                 }`
//               }
//             >
//               {link.name}
//             </Link>
//           ))}
   
//         </div>


//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-white px-4 pb-4 shadow-sm">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.path}
//               onClick={() => setIsOpen(false)}
//               className={({ isActive }) =>
//                 `block py-2 text-sm font-medium ${
//                   isActive
//                     ? "text-[#125A88] underline underline-offset-4"
//                     : "text-gray-800 hover:text-[#125A88]"
//                 }`
//               }
//             >
//               {link.name}
//             </Link>
//           ))}
         
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





// "use client"
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     // Check for authToken in localStorage when component mounts
//     const authToken = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
//     setIsLoggedIn(!!authToken);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     setIsLoggedIn(false);
//     setIsOpen(false);
//     // Optional: Redirect to home page after logout
//     // window.location.href = '/';
//   };

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Our Client", path: "/#clientspage" },
//     { name: "Features", path: "/features" },
//     { name: "Contact Us", path: "/contact" },
//     { name: "Plans", path: "/plans" },
//   ];

//   return (
//     <nav className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
//         <div>
//           <Link href="/">
//             <img
//               src="https://t-racktool.com/static/media/MainLogo.f1fd5127fdae55feda4f.png"
//               alt="T-RACK Logo"
//               className="h-10"
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-6 items-center">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.path}
//               className={`text-sm font-medium ${
//                 pathname === link.path
//                   ? "text-[#125A88] underline underline-offset-4"
//                   : "text-gray-800 hover:text-[#125A88] transition-colors"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
          
//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="text-sm font-medium text-gray-800 hover:text-[#125A88] transition-colors"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               href="/login"
//               className={`text-sm font-medium ${
//                 pathname === '/login'
//                   ? "text-[#125A88] underline underline-offset-4"
//                   : "text-gray-800 hover:text-[#125A88] transition-colors"
//               }`}
//             >
//               Login
//             </Link>
//           )}
//         </div>

//         {/* Mobile menu button */}
//         <div className="md:hidden">
//           <button 
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-gray-800 hover:text-[#125A88] transition-colors"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-white px-4 pb-4 shadow-md">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.path}
//               onClick={() => setIsOpen(false)}
//               className={`block py-2 text-sm font-medium ${
//                 pathname === link.path
//                   ? "text-[#125A88] underline underline-offset-4"
//                   : "text-gray-800 hover:text-[#125A88] transition-colors"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
          
//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="block w-full text-left py-2 text-sm font-medium text-gray-800 hover:text-[#125A88] transition-colors"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               href="/login"
//               onClick={() => setIsOpen(false)}
//               className={`block py-2 text-sm font-medium ${
//                 pathname === '/login'
//                   ? "text-[#125A88] underline underline-offset-4"
//                   : "text-gray-800 hover:text-[#125A88] transition-colors"
//               }`}
//             >
//               Login
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;







"use client"
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Also check auth status when pathname changes (page navigation)
  useEffect(() => {
    checkAuthStatus();
  }, [pathname]);

  const checkAuthStatus = () => {
    const authToken = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    setIsLoggedIn(!!authToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
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
            <img
              src={"logo.jpeg"}
              alt="T-RACK Logo"
              className="h-10"
            />
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
              onClick={handleLogout}
              className="text-sm font-medium text-gray-800 hover:text-[#125A88] transition-colors"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className={`text-sm font-medium ${
                pathname === '/login'
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
                pathname === '/login'
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