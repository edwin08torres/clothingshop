import Marquee from "react-fast-marquee";
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
    <section className="mt-10 pb-8">
      <Marquee
        gradient={false}          
        speed={70}                
        pauseOnHover             
      >
        {products.map((p) => (
          <motion.a
            href={p.link}
            key={p.title}
            whileTap={{ scale: 0.95 }}
            className="mx-3 shrink-0 rounded-xl shadow-lg relative overflow-hidden"
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-[20rem] h-[24rem] object-cover mx-4"
            />
            <span className="absolute bottom-2 left-2 text-xs text-black drop-shadow w-[20rem]">
              {p.title}
            </span>
          </motion.a>
        ))}
      </Marquee>
    </section>
  );
}
