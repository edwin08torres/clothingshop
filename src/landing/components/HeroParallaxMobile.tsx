import { motion } from "motion/react";
import type { Card } from "./HeroCarouselMobile";
import ProductCard from "./ProductCard";

interface Props {
  products: Card[];
}

export default function HeroParallaxMobile({ products }: Props) {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);

  return (
    <div className="h-[120vh] overflow-hidden relative py-12 flex flex-col [perspective:800px] [transform-style:preserve-3d]">
      <motion.div className="flex mb-12 space-x-10">
        {firstRow.map((p) => (
          <ProductCard key={p.title} product={p} />
        ))}
      </motion.div>
      <motion.div className="flex space-x-10">
        {secondRow.map((p) => (
          <ProductCard key={p.title} product={p} />
        ))}
      </motion.div>
    </div>
  );
}
