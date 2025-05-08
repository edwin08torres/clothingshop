import AboutSection from "./components/AboutSection";
import BenefitsSection from "./components/BenefitsSection";
import HeroWrapper from "./components/HeroWrapper";

import { useProducts } from "@/products/hooks/useProducts";

export default function LandingPage() {
  const { products, loading } = useProducts(15);
  const heroProducts = products.map((p) => ({
    title: p.title,
    link: `/products/${p.id}`,
    thumbnail: p.image,
  }));

  if (loading) return null;

  return (
    <>
      <HeroWrapper products={heroProducts} />
      <AboutSection/>
      <BenefitsSection />
    </>
  );
}
