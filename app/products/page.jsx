"use client";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { PRODUCTS } from "../../lib/products";
import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))],
    []
  );

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (!term) return true;
      return (
        p.name.toLowerCase().includes(term) ||
        p.code.toLowerCase().includes(term) ||
        p.id.toLowerCase().includes(term)
      );
    });
  }, [q, category]);

  return (
    <section className="animate-fadeIn">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent">
          Our Product Catalog
        </h1>
        <p className="text-gray-600 text-sm mt-2 max-w-2xl mx-auto">
          Explore our complete selection of premium ingredients - from flours
          and starches to seeds and proteins. Use the search or filters to find
          exactly what you need.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products by name, code, or category..."
            className="w-full md:w-96 border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition ${
                category === c
                  ? "bg-gradient-to-r from-emerald-600 to-cyan-500 text-white border-transparent shadow-sm"
                  : "bg-white text-gray-700 border-gray-300 hover:border-emerald-400 hover:text-emerald-600"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            query={q}
          />
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="mt-12 text-center text-gray-500">
          <div className="text-5xl mb-3">🔍</div>
          <p className="text-lg font-medium">
            No products match your search.
          </p>
          <p className="text-sm mt-1">
            Try using a different keyword or choose “All” categories.
          </p>
        </div>
      )}
    </section>
  );
}
