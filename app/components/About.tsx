"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Rocket } from "lucide-react";

const features = [
  {
    icon: <GraduationCap size={26} />,
    title: "Education",
    description: "ITI Fitter and Bachelor of Arts background.",
  },
  {
    icon: <Briefcase size={26} />,
    title: "Experience",
    description: "4+ years of professional web design experience.",
  },
  {
    icon: <Code2 size={26} />,
    title: "Frontend",
    description: "React.js, Next.js and Tailwind CSS specialist.",
  },
  {
    icon: <Rocket size={26} />,
    title: "Growth",
    description: "Always learning and exploring new technologies.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative md:py-32 py-10 bg-[#050505] overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[150px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 uppercase tracking-[5px] text-sm">
            About Me
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-5">
            From ITI Student To
            <span className="block bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-8">
            I started my journey from a technical background and transformed my
            passion into a successful career in web design and frontend
            development. Today, I specialize in creating modern digital
            experiences using React.js, Next.js and Tailwind CSS.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
            className="
              bg-white/[0.03]
              border border-white/10
              backdrop-blur-xl
              rounded-[40px]
              p-10
            "
          >
            <h3 className="text-3xl font-bold mb-6">My Journey</h3>

            <div className="space-y-6 text-gray-400 leading-8">
              <p>
                My journey started with an ITI Fitter background, where I
                developed technical skills and a problem-solving mindset.
              </p>

              <p>
                While pursuing my studies, I discovered my interest in web
                design and began learning modern web technologies and user
                interface design.
              </p>

              <p>
                Over the years, I progressed from a Junior Web Designer to a
                Senior Web Designer, working with WordPress, Shopify, and custom
                frontend solutions.
              </p>

              <p>
                Today, I focus on building modern and high-performance web
                applications using React.js, Next.js, and Tailwind CSS while
                continuously improving my skills as a Frontend Developer.
              </p>
            </div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  bg-white/[0.03]
                  border border-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-8
                  transition-all
                  duration-500
                "
              >
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className="
                    w-14 h-14 rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500/20
                    to-pink-500/20
                    flex items-center justify-center
                    text-cyan-400 mb-5
                  "
                >
                  {item.icon}
                </motion.div>

                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>

                <p className="text-gray-400 text-sm leading-7">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
