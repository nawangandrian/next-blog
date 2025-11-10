'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineDashboard,
  AiOutlinePhone,
  AiOutlineLogin,
  AiOutlineLogout,
} from 'react-icons/ai'

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const status = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(status)

    const handleStatusChange = () => {
      const updatedStatus = localStorage.getItem('isLoggedIn') === 'true'
      setIsLoggedIn(updatedStatus)
    }

    window.addEventListener('loginStatusChanged', handleStatusChange)
    return () => window.removeEventListener('loginStatusChanged', handleStatusChange)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
    window.dispatchEvent(new Event('loginStatusChanged'))
    router.push('/')
  }

  const navLinks = isLoggedIn
    ? [
        { href: '/dashboard', label: 'Dashboard', icon: <AiOutlineDashboard size={22} /> },
        { href: '/', label: 'Home', icon: <AiFillHome size={22} /> },
        { href: '/about', label: 'About', icon: <AiOutlineUser size={22} /> },
        { href: '/contact', label: 'Contact', icon: <AiOutlinePhone size={22} /> },
      ]
    : [
        { href: '/', label: 'Home', icon: <AiFillHome size={22} /> },
        { href: '/about', label: 'About', icon: <AiOutlineUser size={22} /> },
        { href: '/contact', label: 'Contact', icon: <AiOutlinePhone size={22} /> },
      ]

  return (
    <>
      {/* ===== Desktop Header ===== */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200 hidden md:block">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/next.svg" 
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-2xl font-bold">News </span>
            <span className="text-2xl font-bold text-indigo-600">NawDev</span>
          </div>

          {/* Menu Tengah */}
          <div className="flex space-x-8 font-medium">
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

          {/* Login / Logout */}
          <div>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* ===== Mobile Header ===== */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200 flex md:hidden items-center justify-center py-3 shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            src="/next.svg"
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-2xl font-bold">News </span>
          <span className="text-2xl font-bold text-indigo-600">NawDev</span>
        </div>
      </header>

      {/* ===== Mobile Bottom Navbar ===== */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
        <ul className="flex justify-around items-center py-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex flex-col items-center text-sm px-3 py-2 rounded-lg transition-all ${
                  pathname === link.href
                    ? 'bg-indigo-100 text-indigo-600 font-semibold'
                    : 'text-gray-500 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {link.icon}
                <span className="text-[12px] mt-1">{link.label}</span>
              </Link>
            </li>
          ))}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex flex-col items-center text-sm px-3 py-2 rounded-lg transition-all text-red-600 hover:bg-red-50 hover:text-red-700"
            >
              <AiOutlineLogout size={22} />
              <span className="text-[12px] mt-1">Logout</span>
            </button>
          ) : (
            <Link
              href="/login"
              className="flex flex-col items-center text-sm px-3 py-2 rounded-lg transition-all text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
            >
              <AiOutlineLogin size={22} />
              <span className="text-[12px] mt-1">Login</span>
            </Link>
          )}
        </ul>
      </nav>
    </>
  )
}
