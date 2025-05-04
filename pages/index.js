import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  return (
    <div>
      <Navbar />
      <ProductGrid products={products} />
      <Footer />
    </div>
  );
}