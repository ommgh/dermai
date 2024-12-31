import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface ProductRecommendationsProps {
  products: Product[];
}

export default function ProductRecommendations({
  products,
}: ProductRecommendationsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-light mb-4">Recommended Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <div className="relative h-48 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <button className="mt-4 w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
