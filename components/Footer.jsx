"use client";

import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-gray-600">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Richmond Traders Inc.
          </h3>
          <p className="text-sm leading-relaxed">
            Supplying high-quality bakery mixes, seeds, gums, starches and more
            to the North American food industry. Quality, reliability, and
            service are at the heart of everything we do.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={16} className="text-emerald-600 mt-0.5" />
              +1 (416) 292-5008
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="text-emerald-600 mt-0.5" />
              info@richmondimports.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-emerald-600 mt-0.5" />
              153 Eddystone Ave, North York, ON M3N 1H5, Canada
            </li>
            <li className="flex items-start gap-2">
              <Globe size={16} className="text-emerald-600 mt-0.5" />
              www.richmondimports.com
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-emerald-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/products"
                className="hover:text-emerald-600 transition-colors duration-200"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-emerald-600 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-emerald-600 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs md:text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
          <div>
            © {new Date().getFullYear()} Richmond Traders Inc. — All rights
            reserved.
          </div>
          <div>
            Built with ❤️ in Toronto |{" "}
            <a
              href="https://www.richmondimports.com"
              className="text-emerald-600 hover:underline"
            >
              www.richmondimports.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
