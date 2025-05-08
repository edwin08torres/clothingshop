import type { Card } from "./HeroCarouselMobile";
import { HeroParallax } from "./HeroParallax";
import HeroCarouselMobile from "./HeroCarouselMobile";
import HeroHighlightSection from "./HeroHighlightSection";

interface Props {
  products: Card[];
}

export default function HeroWrapper({ products }: Props) {
  return (
    <>
      {/* desktop */}
      <div className="hidden md:block">
        <HeroParallax products={products} />
      </div>

      {/* mobile */}
      <div className="block md:hidden">
        <HeroHighlightSection />
        <HeroCarouselMobile products={products} />
      </div>
    </>
  );
}
