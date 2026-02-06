import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border rounded-xl overflow-hidden hover:shadow-xl transition bg-white cursor-pointer">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="p-5 text-center">
          <span className="text-xl font-bold text-gray-800">
            {product.name}
          </span>
        </div>
      </div>
    </Link>
  );
}
