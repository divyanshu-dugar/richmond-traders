export default function ProductCard({ product, query }) {
  const highlight = (text) => {
    if (!query) return text;
    const safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(${safe})`, "ig");
    return text.replace(
      re,
      `<span class="bg-emerald-100 text-emerald-700 font-semibold px-1 rounded">$1</span>`
    );
  };

  return (
    <article className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition transform duration-200">
      <div className="text-xs text-gray-400 uppercase tracking-wide">
        {product.category}
      </div>
      <h3
        className="mt-2 font-semibold text-base text-gray-800 leading-tight"
        dangerouslySetInnerHTML={{
          __html: highlight(product.name),
        }}
      />
      <div
        className="mt-1 text-xs text-gray-600"
        dangerouslySetInnerHTML={{
          __html: `Code: <span class='font-mono'>${highlight(product.code)}</span>`,
        }}
      />
    </article>
  );
}
