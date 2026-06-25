"use client";

import {
  MonitorSmartphone,
  Code2,
  LayoutTemplate,
  ShoppingBag,
  Palette,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: <MonitorSmartphone size={30} />,
    title: "Frontend Development",
    description:
      "Modern and responsive web applications using React.js and Next.js.",
  },
  {
    icon: <Code2 size={30} />,
    title: "PSD / Figma to HTML",
    description:
      "Pixel-perfect conversion from design files to responsive websites.",
  },
  {
    icon: <LayoutTemplate size={30} />,
    title: "Next.js Development",
    description:
      "Fast, SEO friendly and scalable applications using Next.js.",
  },
  {
    icon: <ShoppingBag size={30} />,
    title: "Shopify Development",
    description:
      "Custom Shopify stores and theme customization for ecommerce brands.",
  },
  {
    icon: <Palette size={30} />,
    title: "UI Implementation",
    description:
      "Beautiful interfaces with modern animations and user experience.",
  },
  {
    icon: <Rocket size={30} />,
    title: "Performance Optimization",
    description:
      "Improving speed, SEO and overall website performance.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative md:py-32 py-10 bg-[#050505] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[6px] text-sm">
            Services
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-5">
            What I <span className=" bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-8">
            I help businesses and startups create modern,
            high-performance and visually appealing websites.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                bg-white/[0.03]
                border border-white/10
                backdrop-blur-xl
                rounded-[30px]
                p-8
                hover:-translate-y-3
                hover:border-cyan-400/30
                transition-all
                duration-500
              "
            >
              {/* Icon */}
              <div
                className="
                  w-16 h-16
                  rounded-2xl
                  flex items-center justify-center
                  bg-gradient-to-r
                  from-cyan-500/20
                  to-pink-500/20
                  text-cyan-400
                  mb-6
                  group-hover:scale-110
                  transition-all
                  duration-500
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7">
                {service.description}
              </p>

              {/* Bottom Line */}
              <div
                className="
                  mt-8
                  h-[2px]
                  w-0
                  bg-gradient-to-r
                  from-cyan-500
                  to-pink-500
                  group-hover:w-full
                  transition-all
                  duration-500
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}