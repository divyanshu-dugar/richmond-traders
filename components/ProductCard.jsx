export default function ProductCard({ product, highlight }) {
  return (
    <article className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">
      <div className="text-xs text-gray-400">{product.category}</div>
      <h3 className="mt-2 font-semibold text-sm">
        {highlight ? (
          <span dangerouslySetInnerHTML={{ __html: highlight }} />
        ) : (
          product.name
        )}
      </h3>
      <div className="mt-2 text-xs text-gray-600">
        Code: <span className="font-mono">{product.code}</span>
      </div>
    </article>
  );
}
