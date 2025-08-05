import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#C8E3F5] text-gray-700 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-9">

        <div>
          <img
            src={"footerlogo.png"}
            alt="T-RACK Logo"
            className="h-10 mb-4"
          />
          <h3 className="font-semibold text-base">Start your 7-day free trial</h3>
          <p className="text-sm mt-2">
            Experience the full power of T-Rack with a 7-day free trial. Begin automating,
            managing, and accelerating your ticketing process now!
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-1">
            <li ><Link href="/" className="hover:text-[#125A88] hover:font-bold">Home</Link></li>
            <li ><Link href="/about" className="hover:text-[#125A88] hover:font-bold">About Us</Link></li>
            <li ><Link href="/clients" className="hover:text-[#125A88] hover:font-bold">Our Clients</Link></li>
            <li ><Link href="/features" className="hover:text-[#125A88] hover:font-bold">Features</Link></li>
            <li ><Link href="/contact" className="hover:text-[#125A88] hover:font-bold">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Social Links</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaFacebookSquare className="text-blue-600 text-xl" />
              <a href="" className="hover:text-blue-600">Facebook</a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-purple-500 text-xl" />
              <a href="" className="hover:text-purple-500">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedinIn className="text-blue-500 text-xl" />
              <a href="" className="hover:text-blue-500">Linkedin</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Contact Information</h4>
          <a href="mailto:support@t-racktool.com" className="text-base mb-2">
            <strong>Email:</strong><br />
            support@t-racktool.com
          </a>
        </div>
      </div>
    </footer>
  );
}
