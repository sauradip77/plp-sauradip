export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map(product => (
        <div key={product.id} className="border rounded-xl p-4 shadow-md hover:shadow-lg">
          <img src={product.image} alt={product.title} className="h-40 mx-auto" />
          <h3 className="mt-2 font-semibold">{product.title}</h3>
          <p className="text-sm text-gray-600">{product.category}</p>
          <p className="font-bold">${product.price}</p>
        </div>
      ))}
    </div>
  );
}