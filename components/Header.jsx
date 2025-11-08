"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-sm group-hover:scale-105 transition">
            RT
          </div>
          <div>
            <div className="font-semibold text-lg tracking-tight">
              Richmond Traders
            </div>
            <div className="text-xs text-gray-500">
              Quality Ingredients • Toronto
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition ${
                  isActive
                    ? "text-emerald-600"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-500 transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-4 bg-gradient-to-r from-emerald-600 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/80 backdrop-blur-sm">
          <nav className="flex flex-col px-4 py-3 space-y-3">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium transition ${
                    isActive
                      ? "text-emerald-600"
                      : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-center bg-gradient-to-r from-emerald-600 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
