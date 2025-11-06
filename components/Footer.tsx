import { Twitter, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-16">
      {/* Bagian tengah: info grid */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:text-left">
        
        {/* Brand */}
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h3 className="text-2xl font-bold mb-2">News NawDev</h3>
          <p className="text-blue-100 mb-3">
            Kami menciptakan pengalaman digital modern untuk developer Indonesia.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 text-2xl mt-1">
            <a href="#" className="hover:text-gray-200 transition">
              <Twitter />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <Facebook />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="lg:col-span-2 flex flex-col lg:flex-row justify-center lg:justify-end items-center mt-4 lg:mt-0">
          {/* Title "Company" hanya muncul di desktop */}
          <h4 className="hidden md:block text-blue-100 font-semibold mb-3 lg:mb-0 lg:mr-4">
            Company
          </h4>

          {/* Menu selalu sejajar di semua ukuran */}
          <ul className="flex flex-row flex-wrap justify-center space-x-6 text-blue-100 text-sm md:text-base">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-blue-900 text-blue-200 text-sm py-4 border-t border-blue-600">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between px-6 gap-2 md:gap-0 text-center md:text-left">
          <p>© {new Date().getFullYear()} News NawDev. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Dibangun dengan oleh{" "}
            <span className="font-semibold text-white">NawangDev</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
