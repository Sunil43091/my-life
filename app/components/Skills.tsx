"use client";

import {
  Code2,
  Palette,
  Globe,
  Database,
} from "lucide-react";

const skillCategories = [
  {
    icon: <Code2 size={28} />,
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    icon: <Palette size={28} />,
    title: "UI / Design",
    skills: [
      "Figma",
      "PSD to HTML",
      "Responsive Design",
      "UI Implementation",
    ],
  },
  {
    icon: <Globe size={28} />,
    title: "CMS Development",
    skills: [
      "WordPress",
      "Shopify",
      "Elementor",
      "WooCommerce",
    ],
  },
  {
    icon: <Database size={28} />,
    title: "Backend & Tools",
    skills: [
      "MongoDB",
      "Git",
      "GitHub",
      "REST API",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative md:py-32 py-10 bg-[#050505] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[6px] text-sm">
            Skills
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-5">
            My Technical
            <span className="block bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-8">
            Technologies and tools I use to build fast,
            scalable and modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="
                group
                bg-white/[0.03]
                backdrop-blur-xl
                border border-white/10
                rounded-[32px]
                p-8
                hover:-translate-y-2
                hover:border-cyan-400/30
                transition-all
                duration-500
              "
            >
              {/* Icon */}
              <div
                className="
                  w-16 h-16 rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500/20
                  to-pink-500/20
                  flex items-center justify-center
                  text-cyan-400
                  mb-6
                "
              >
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-6">
                {category.title}
              </h3>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-white/[0.05]
                      border border-white/10
                      text-gray-300
                      text-sm
                      hover:border-cyan-400/40
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              4+
            </h3>
            <p className="text-gray-400 mt-2">
              Years Experience
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-pink-400">
              50+
            </h3>
            <p className="text-gray-400 mt-2">
              Projects Delivered
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              15+
            </h3>
            <p className="text-gray-400 mt-2">
              Technologies
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-pink-400">
              100%
            </h3>
            <p className="text-gray-400 mt-2">
              Passion for Learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}