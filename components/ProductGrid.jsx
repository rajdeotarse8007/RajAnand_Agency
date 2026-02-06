import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.slice(0, 10).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
