"use client";

import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Corporate Business Website",
    category: "Next.js Development",
    description:
      "Modern corporate website with premium UI and optimized performance.",
    technologies: ["Next.js", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "Ecommerce Store",
    category: "Shopify Development",
    description:
      "Fully responsive ecommerce experience with custom storefront.",
    technologies: ["Shopify", "Liquid", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  },
  {
    title: "Admin Dashboard",
    category: "React Application",
    description:
      "Analytics dashboard with charts, authentication and APIs.",
    technologies: ["React", "Tailwind", "REST API"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Portfolio Website",
    category: "Frontend Development",
    description:
      "Animated personal portfolio using modern web technologies.",
    technologies: ["Next.js", "Framer Motion", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative md:py-32 py-10 bg-[#050505] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[6px] text-sm">
            Projects
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-5">
            Featured
            <span className="block bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg leading-8">
            A collection of projects that reflect my experience
            in frontend development, UI design and modern web technologies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                bg-white/[0.03]
                border border-white/10
                backdrop-blur-xl
                rounded-[32px]
                overflow-hidden
                hover:-translate-y-3
                hover:border-cyan-400/30
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-[320px]
                    w-full
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                  "
                />

                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                " />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm tracking-widest uppercase">
                    {project.category}
                  </span>

                  <a href="https://codebysunil.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight
                    size={22}
                    className="
                      text-gray-400
                      group-hover:text-cyan-400
                      transition-all
                    "
                  />
                  </a>
                </div>

                <h3 className="text-3xl font-bold mt-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-4 py-2
                        rounded-full
                        border border-white/10
                        bg-white/[0.04]
                        text-sm text-gray-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                  <button className="
                    flex items-center gap-2
                    px-5 py-3
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-pink-500
                    text-white
                    font-medium
                  ">
                    <ExternalLink size={18} />
                  <a href="https://codebysunil.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white">
                    Live Demo
                  </a>
                  </button>

                  <button className="
                    flex items-center gap-2
                    px-5 py-3
                    rounded-full
                    border border-white/10
                    hover:bg-white/5
                    transition-all
                  ">
                    <a href="https://github.com/Sunil43091" target="_blank" rel="noopener noreferrer" className="text-white">
                      {/* <Github size={18} />/ */}
                      Github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}