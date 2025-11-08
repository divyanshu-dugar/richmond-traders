"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-cyan-500 flex items-center justify-center text-white font-bold">
            RT
          </div>
          <div>
            <Link href="/" className="font-semibold text-lg">
              Richmond Traders
            </Link>
            <div className="text-xs text-gray-500">
              Quality Ingredients • Toronto
            </div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/products" className="text-sm hover:text-emerald-600">
            Products
          </Link>
          <Link href="/about" className="text-sm hover:text-emerald-600">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:text-emerald-600">
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <Link href="/products" className="text-sm text-emerald-600">
            Products
          </Link>
        </div>
      </div>
    </header>
  );
}
