"use client";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-xl font-bold mb-4">Product Listing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-2" />
              <h2 className="font-semibold">{product.title}</h2>
              <p className="text-sm text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}