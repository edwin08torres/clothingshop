import type { Card } from "./HeroCarouselMobile";
import { HeroParallax } from "./HeroParallax";
import HeroCarouselMobile from "./HeroCarouselMobile";
import HeroHighlightSection from "./HeroHighlightSection"; 
import { useBreakpoint } from "@/shared/hooks/useBreakpoint";

interface Props {
  products: Card[];
}

export default function HeroWrapper({ products }: Props) {
  const isMdUp = useBreakpoint("md");

  // desktop
  if (isMdUp) {
    return <HeroParallax products={products} />;
  }

  // mobile
  return (
    <>
      <HeroHighlightSection />

      <HeroCarouselMobile products={products} />
    </>
  );
}
