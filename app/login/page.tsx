'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true')
      window.dispatchEvent(new Event('loginStatusChanged'))
      router.push('/dashboard')
    } else {
      setError('Email atau password salah!')
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* === Sisi kiri === */}
        <div className="relative group hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80"
            alt="News NawDev"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-indigo-700 bg-opacity-80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 flex items-center justify-center text-center px-6">
            <p className="text-white text-lg font-medium">
              <span className="font-bold text-2xl">News NawDev</span> adalah platform berita dan artikel teknologi terkini.
            </p>
          </div>
        </div>

        {/* === Sisi kanan === */}
        <div className="flex flex-col justify-center px-8 py-12 md:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Selamat Datang 👋</h2>
          <p className="text-gray-600 mb-8">
            Masuk untuk mengakses <span className="text-indigo-600 font-semibold">Dashboard</span>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@gmail.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Password dengan tombol Show/Hide */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="admin123"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none pr-16"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-sm text-indigo-600 hover:underline"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold rounded-md py-2 hover:bg-indigo-700 transition"
            >
              Login
            </button>

            {/* Link Back */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Kembali ke home?{' '}
              <Link href="/" className="text-indigo-600 hover:underline font-medium">
                Back
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
