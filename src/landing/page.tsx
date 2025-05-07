import HeroWrapper      from "./components/HeroWrapper";
// import FeaturesSection   from "./components/FeaturesSection";
// … cualquier otra sección

import { useProducts }   from "@/products/hooks/useProducts";

export default function LandingPage() {
  // mismo loader de productos que tenías en Home
  const { products, loading } = useProducts(15);
  const heroProducts = products.map(p => ({
    title: p.title,
    link:  `/products/${p.id}`,
    thumbnail: p.image,
  }));

  if (loading) return null;

  return (
    <>
      <HeroWrapper products={heroProducts} />
      {/* <FeaturesSection /> */}
      {/* más secciones… */}
    </>
  );
}
