"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Briefcase, FolderOpen, Users, Code2 } from "lucide-react";

const stats = [
  {
    icon: <Briefcase size={30} />,
    value: 4,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: <FolderOpen size={30} />,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: <Users size={30} />,
    value: 20,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: <Code2 size={30} />,
    value: 10,
    suffix: "+",
    label: "Technologies",
  },
];

export default function Stats() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-[#050505] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                group
                bg-white/[0.03]
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
                text-center
                hover:border-cyan-400/30
                transition-all
                duration-500
              "
            >
              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.15,
                }}
                className="
                  w-16 h-16 mx-auto rounded-2xl
                  flex items-center justify-center
                  bg-gradient-to-r
                  from-cyan-500/20
                  to-pink-500/20
                  text-cyan-400
                  mb-5
                "
              >
                {item.icon}
              </motion.div>

              {/* Count Animation */}
              <h3 className="text-4xl font-bold text-white mb-2">
                <CountUp
                  end={item.value}
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {item.suffix}
              </h3>

              <p className="text-gray-400 text-sm tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}