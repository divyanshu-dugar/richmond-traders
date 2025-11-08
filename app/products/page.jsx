"use client";
import { useState, useMemo } from "react";
import { PRODUCTS } from "../../lib/products";
import ProductCard from "../../components/ProductCard";

function highlightMatch(text, query) {
  if (!query) return text;
  const safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(${safe})`, "ig");
  return text.replace(re, '<span class="mark">$1</span>');
}

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
    <section>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex-1">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products by name, code or id..."
            className="w-full md:w-96 border rounded-md px-3 py-2"
          />
        </div>

        <div className="flex items-center gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <div className="text-sm text-gray-600">
            {filtered.length} products
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            highlight={q ? highlightMatch(p.name + " " + p.code, q) : null}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-8 text-center text-gray-500">
          No products match your search — try a different keyword or category.
        </div>
      )}
    </section>
  );
}
