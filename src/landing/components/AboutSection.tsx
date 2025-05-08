"use client";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section className="relative w-full h-[130vh] overflow-hidden">
      {/* Fondo con imagen y animación zoom-out */}
      <motion.div
        className="absolute inset-0 bg-[url('/assets/about.jpg')] bg-center bg-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Capa semi-transparente para mejorar lectura */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Texto centrado */}
      <motion.article
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ropa consciente. <br /> Estilo atemporal.
        </h2>

        <p className="text-white/90 leading-relaxed mb-4">
          En <strong>Loomcraft</strong> diseñamos prendas minimalistas hechas con algodón
          orgánico certificado y tintes a base de agua. Producimos en{' '}
          <em>lotes pequeños</em> para evitar sobre-stock y reducir desperdicios.
        </p>

        <p className="text-white/90 leading-relaxed mb-8">
          Cada pieza es confeccionada por artesanos locales en condiciones de trabajo
          justas. Creemos que la moda no debe costarle al planeta ni a las personas que
          la crean.
        </p>

        <motion.a
          href="#products"
          className="inline-block rounded-full bg-white text-black px-8 py-3 font-semibold shadow hover:opacity-90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explorar colección
        </motion.a>
      </motion.article>
    </section>
  );
}
