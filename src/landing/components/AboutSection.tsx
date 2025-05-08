"use client";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section className="px-4 py-6 lg:py-24 md:py-6 bg-white mt-12">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center shadow-xl rounded-3xl">
        {/* imagen */}
        <motion.img
          src="/assets/about.jpg"
          alt="Tela de algodón orgánico"
          className="rounded-b-xl md:rounded-b-none lg:rounded-l-3xl shadow-xl w-full h-full object-cover"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        <article className="flex flex-col items-center justify-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:py-6 ">
            Ropa consciente. <br /> Estilo atemporal.
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            En <strong>ClothingShop</strong> diseñamos prendas minimalistas
            hechas con algodón orgánico certificado y tintes a base de agua.
            Producimos en <em>lotes pequeños</em> para evitar sobre‑stock y
            reducir desperdicios.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Cada pieza es confeccionada por artesanos locales en condiciones de
            trabajo justas. Creemos que la moda no debe costarle al planeta ni a
            las personas que la crean.
          </p>

          <a
            href="#products"
            className="inline-block rounded-full bg-white shadow-md text-black px-8 py-3 font-semibold hover:opacity-90 transition mb-4 hover:bg-slate-200"
          >
            Explorar colección
          </a>
        </article>
      </div>
    </section>
  );
}
