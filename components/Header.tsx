'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">News</span>
          <span className="text-2xl font-bold text-indigo-600">NawDev</span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors relative pb-1 ${
                pathname === link.href
                  ? 'text-indigo-600 font-semibold after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section: Login Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-3 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-2 py-1 rounded ${
                  pathname === link.href
                    ? 'text-indigo-600 font-semibold bg-indigo-50'
                    : 'hover:text-indigo-600'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition mt-2 text-center"
            >
              Login
            </Link>
          </ul>
        </div>
      )}
    </header>
  )
}
