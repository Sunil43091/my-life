"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, TrendingUp, Rocket } from "lucide-react";

const journeyData = [
  {
    year: "2015 - 2018",
    title: "ITI Fitter",
    description:
      "Started my technical journey with ITI Fitter and built strong technical foundations.",
    icon: <GraduationCap size={24} />,
  },
  {
    year: "2019 - 2020",
    title: "Bachelor of Arts",
    description:
      "Completed first and second year studies while exploring different career opportunities and developing an interest in technology.",
    icon: <GraduationCap size={24} />,
  },
  {
    year: "2021 - 2022",
    title: "Junior Web Designer",
    company: "ARC Web Media Solutions",
    description:
      "Started my professional journey as a Junior Web Designer, working on website layouts, UI design and frontend development.",
    icon: <Briefcase size={24} />,
  },
  {
    year: "2022 - 2024",
    title: "Senior Web Designer",
    company: "Binary Data Pvt Ltd",
    description:
      "Led multiple projects involving WordPress, Shopify and modern web technologies while mentoring junior team members.",
    icon: <TrendingUp size={24} />,
  },
  {
    year: "2025",
    title: "Senior Web Designer",
    company: "Miracle Web Soft Pvt Ltd",
    description:
      "Working on modern web applications using React.js, Next.js and Tailwind CSS with a focus on performance and user experience.",
    icon: <Rocket size={24} />,
  },
    {
    year: "2025 - 2026",
    title: "Senior Web Designer",
    company: "Web Perfection Pvt Ltd",
    description:
      "Working on modern web applications using React.js, Next.js and Tailwind CSS with a focus on performance and user experience.",
    icon: <Rocket size={24} />,
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative md:py-32 py-10 bg-[#050505] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 blur-[180px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-24">
          <span className="text-cyan-400 uppercase tracking-[6px] text-sm">
            My Journey
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-5">
            The Story Behind
            <span className="block bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              My Growth
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-8">
            Every step of my journey helped shape my skills, mindset and passion
            for building digital experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 to-pink-500 -translate-x-1/2"></div>

          <div className="space-y-16">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                  w-full md:w-[45%]
                  bg-white/[0.03]
                  border border-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-8
                  hover:border-cyan-400/30
                  transition-all
                  duration-500
                "
                >
                  <span className="text-cyan-400 text-sm font-semibold tracking-widest">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold mt-3">{item.title}</h3>

                  <p className="text-pink-400 font-medium mt-1">
                    {item.company}
                  </p>

                  <p className="text-gray-400 leading-7 mt-4">
                    {item.description}
                  </p>
                </motion.div>

                {/* Animated Icon */}
                <motion.div
                  initial={{
                    scale: 0,
                    rotate: -180,
                  }}
                  whileInView={{
                    scale: 1,
                    rotate: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.2,
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 15,
                  }}
                  className="
                  absolute
                  left-6
                  md:left-1/2
                  md:top-8
                  -top-8
                  -translate-x-1/2
                  w-14
                  h-14
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-pink-500
                  flex
                  items-center
                  justify-center
                  text-white
                  shadow-lg
                  shadow-cyan-500/30
                  z-10
                "
                >
                  {item.icon}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
