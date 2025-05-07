import { motion } from "motion/react";

export interface Card {
  title: string;
  link: string;
  thumbnail: string;
}

interface Props {
  products: Card[];
}

export default function HeroCarouselMobile({ products }: Props) {
  return (
    <section className="mt-10 pb-8 overflow-x-auto no-scrollbar flex gap-6 snap-x snap-mandatory px-6">
      {products.map((p) => (
        <motion.a
          href={p.link}
          key={p.title}
          whileTap={{ scale: 0.95 }}
          className="shrink-0 snap-center w-60 h-60 rounded-xl shadow relative overflow-hidden"
        >
          <img src={p.thumbnail} alt={p.title} className="object-cover w-full h-full" />
          <span className="absolute bottom-2 left-2 text-xs text-white drop-shadow">
            {p.title}
          </span>
        </motion.a>
      ))}
    </section>
  );
}
