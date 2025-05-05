import React from "react";

export default function Home({ products }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 shadow rounded">
            <img src={product.image} alt={product.title} className="h-40 mx-auto" />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-sm text-gray-600 mt-1">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    if (!Array.isArray(products)) throw new Error("Invalid product data");

    return {
      props: { products },
    };
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return {
      props: { products: [] },
    };
  }
}