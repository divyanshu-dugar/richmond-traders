"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Package, Phone, ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-screen py-12 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* ===================== HERO SECTION ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-emerald-600 to-cyan-500 text-white p-10 md:p-16 shadow-xl flex flex-col justify-center"
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Supplying Quality Ingredients for a Better Tomorrow
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/90">
              Richmond Traders Inc. - Toronto’s trusted importer and distributor
              of bakery mixes, flours, gums, starches, and specialty seeds.
              Delivering excellence across North America.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-white text-emerald-600 font-semibold px-6 py-3 rounded-md shadow-sm hover:shadow-md transition-all"
              >
                Browse Products
              </Link>
              <Link
                href="/contact"
                className="border border-white/50 text-white px-6 py-3 rounded-md hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ===================== FEATURE GRID ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Package,
              title: "Wide Product Range",
              text: "From flours and starches to gums and proteins — a full catalog of food-grade agricultural ingredients.",
            },
            {
              icon: Leaf,
              title: "Trusted Sourcing",
              text: "We partner with innovative, reliable suppliers to ensure consistent quality and competitive pricing.",
            },
            {
              icon: ShoppingBag,
              title: "Customer-Centric Service",
              text: "We deliver on time, maintain transparent communication, and value long-term relationships.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all"
            >
              <feature.icon className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ===================== ABOUT SECTION ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Who We Are
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Richmond Traders Inc., our mission is to provide high-quality
              agricultural ingredients and exceptional service to our customers
              at a competitive price. We continue to expand our product range,
              global partnerships, and North American reach - delivering
              excellence in every shipment.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 bg-emerald-600 text-white px-6 py-2.5 rounded-md hover:bg-emerald-700 transition-all"
            >
              Learn More
            </Link>
          </div>

          <motion.img
            src="/warehouse.png"
            alt="Warehouse"
            className="w-full h-72 object-cover rounded-2xl shadow-sm"
          />
        </motion.div>

        {/* ===================== CONTACT BANNER ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-cyan-500 to-emerald-600 text-white p-10 md:p-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            Let’s Build Strong Partnerships
          </h2>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">
            Whether you’re a food manufacturer, wholesaler, or retailer — we’re
            here to serve your ingredient needs with quality, reliability, and
            trust.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block bg-white text-emerald-600 font-semibold px-6 py-3 rounded-md shadow hover:shadow-md transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
