'use client';

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* === Sisi Kiri (Gambar + Overlay Tirai dari Kiri ke Kanan) === */}
        <div className="relative group hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80"
            alt="News NawDev"
            className="h-full w-full object-cover"
          />

          {/* Overlay tirai dari kiri */}
          <div className="absolute inset-0 bg-indigo-700 bg-opacity-80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 flex items-center justify-center text-center px-6">
            <p className="text-white text-lg font-medium">
              <span className="font-bold text-2xl">News NawDev</span> adalah
              platform berita dan artikel teknologi terkini, tempat terbaik
              untuk memperluas wawasan developer modern.
            </p>
          </div>
        </div>

        {/* === Sisi Kanan (Form Login) === */}
        <div className="flex flex-col justify-center px-8 py-12 md:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Selamat Datang 👋</h2>
          <p className="text-gray-600 mb-8">
            Silakan masuk untuk mengakses dashboard <br/><span className="text-indigo-600 font-semibold">News NawDev</span>.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-sm text-indigo-600 hover:underline"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold rounded-md py-2 hover:bg-indigo-700 transition"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Kembali ke home?{" "}
              <Link href="/" className="text-indigo-600 hover:underline font-medium">
                Back
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
