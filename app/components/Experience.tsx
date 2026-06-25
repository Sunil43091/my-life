"use client";

import {
  Briefcase,
  ArrowUpRight,
  Building2,
} from "lucide-react";

const experiences = [
  {
    company: "ARC Web Media Solution",
    role: "Junior Web Designer",
    duration: "2021 - 2022",
    description:
      "Started my professional journey by designing responsive websites and learning modern web technologies.",
    skills: ["HTML", "CSS", "Bootstrap", "WordPress"],
  },
  {
    company: "Binary Data Pvt Ltd",
    role: "Senior Web Designer",
    duration: "2022 - 2024",
    description:
      "Worked on multiple client projects using WordPress, Shopify and custom frontend solutions.",
    skills: ["WordPress", "Shopify", "Figma", "Tailwind"],
  },
  {
    company: "Miracle Websoft",
    role: "Senior Web Designer",
    duration: "2025",
    description:
      "Focused on UI implementation, design systems and performance optimization.",
    skills: ["React", "Next.js", "Tailwind", "UI/UX"],
  },
  {
    company: "Web Perfection Technology",
    role: "Senior Web Designer",
    duration: "2025 - Present",
    description:
      "Building modern digital experiences using React.js, Next.js and scalable frontend architectures.",
    skills: ["React", "Next.js", "Tailwind", "Laravel"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative md:py-32 py-10 bg-[#050505] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[6px] text-sm">
            Experience
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-5">
            Professional
            <span className="block bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-8">
            My professional journey through companies,
            projects and continuous growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
                group
                bg-white/[0.03]
                backdrop-blur-xl
                border
                border-white/10
                rounded-[32px]
                p-8
                hover:-translate-y-2
                hover:border-cyan-400/30
                transition-all
                duration-500
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-6">
                <div className="
                  w-16 h-16 rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500/20
                  to-pink-500/20
                  flex items-center justify-center
                  text-cyan-400
                ">
                  <Building2 size={30} />
                </div>

                <ArrowUpRight
                  size={24}
                  className="
                    text-gray-500
                    group-hover:text-cyan-400
                    transition-all
                  "
                />
              </div>

              {/* Content */}
              <span className="text-cyan-400 text-sm font-medium">
                {exp.duration}
              </span>

              <h3 className="text-2xl font-bold mt-3">
                {exp.role}
              </h3>

              <div className="flex items-center gap-2 mt-3 text-gray-400">
                <Briefcase size={16} />
                {exp.company}
              </div>

              <p className="text-gray-400 mt-6 leading-7">
                {exp.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 mt-8">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-white/[0.04]
                      border border-white/10
                      text-sm text-gray-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}