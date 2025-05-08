import { Check, Truck, Repeat, CreditCard, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: <Truck className="w-8 h-8 text-indigo-500" />,
    title: "Envío exprés",
    description:
      "Recibe tus productos de forma rápida y segura en menos de 48 horas en cualquier parte del país, con seguimiento en tiempo real.",
    bullets: [
      "48 h a todo el país",
      "Gratis desde $49",
      "Seguimiento en línea",
    ],
  },
  {
    icon: <Repeat className="w-8 h-8 text-emerald-500" />,
    title: "Cambios gratis",
    description:
      "Si cambias de opinión o no te queda como esperabas, gestiona tu devolución sin gastos ni papeleo en un proceso 100 % online.",
    bullets: [
      "30 días sin preguntas",
      "Primer cambio sin costo",
      "Proceso 100 % online",
    ],
  },
  {
    icon: <CreditCard className="w-8 h-8 text-pink-500" />,
    title: "Pago seguro",
    description:
      "Tus datos siempre protegidos gracias a encriptación SSL y 3-D Secure. Aceptamos múltiples métodos de pago para tu comodidad.",
    bullets: ["SSL & 3-D Secure", "Cuotas sin interés", "Cripto y PayPal"],
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white flex flex-col items-center gap-10">
      <h2 className="text-3xl font-extrabold uppercase tracking-wider text-center px-[4px]">
        Ofrecemos los siguientes beneficios
      </h2>

      <div className="grid gap-10 px-6 max-w-6xl w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon, title, description, bullets }) => (
          <div key={title} className="relative flex justify-center">
            <div
              className="
                relative
                group
                z-10
                bg-white
                rounded-[2rem]
                shadow-lg
                px-8 py-12
                min-h-[280px]
                w-[19rem]
                text-center
                transform transition-all ease-in-out
                group-hover:-translate-y-1
              "
            >
              <span
                className="
                  absolute bottom-0 left-0 block h-1 w-0
                  bg-gradient-to-r from-indigo-400 via-blue-500 to-fuchsia-500
                  rounded-b-[1rem]
                  transition-all duration-300
                  group-hover:w-full
                  group-focus-within:w-full
                  group-active:w-full
                "
              />
              <div
                className="
                  absolute inset-0 -z-10
                  rounded-[2rem]
                  blur-2xl
                  opacity-0
                  group-hover:opacity-60
                  transition duration-500
                "
              />

              {icon}

              <h3 className="mt-4 text-lg font-semibold">{title}</h3>

              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                {description}
              </p>

              <ul className="mt-4 space-y-1 text-gray-600 text-sm">
                {bullets.map((li) => (
                  <li key={li} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <Sparkles
                size={20}
                className="
                  absolute -top-6 -left-3
                  text-indigo-400
                  opacity-0
                  group-hover:opacity-100
                  group-hover:-rotate-12
                  transition-all duration-300
                "
              />
              <Sparkles
                size={20}
                className="
                  absolute -bottom-6 -right-3
                  text-fuchsia-500
                  opacity-0
                  group-hover:opacity-100
                  group-hover:rotate-12
                  transition-all duration-300
                "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
