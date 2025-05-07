import { motion, useMotionValue, type MotionValue } from "motion/react";
import type { Card } from "./HeroCarouselMobile";

interface Props {
  product: Card;
  translate?: MotionValue<number>;   
}

export default function ProductCard({ product, translate }: Props) {
  const x = translate ?? useMotionValue(0);

  return (
    <motion.a
      href={product.link}
      style={{ x }}
      whileHover={{ y: -20 }}
      className="
        relative shrink-0 rounded-xl overflow-hidden shadow-xl
        w-64 h-72 md:w-[30rem] md:h-96
      "
    >
      <img src={product.thumbnail} alt={product.title} className="object-cover w-full h-full" />
      <span className="absolute bottom-2 left-2 text-xs md:text-base text-white drop-shadow">
        {product.title}
      </span>
    </motion.a>
  );
}
